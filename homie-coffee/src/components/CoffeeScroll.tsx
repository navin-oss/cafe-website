"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";
import TextOverlay from "./TextOverlay";


const FRAME_COUNT = 80;
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;

export default function CoffeeScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);

    // Restore container-based scroll tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 0.85], [1, FRAME_COUNT]);

    useEffect(() => {
        // Preload images
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises = [];

            for (let i = 1; i <= FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve, reject) => {
                    const img = new Image();
                    img.src = `/images/sequence/coffee_frame_${i}.jpg`;
                    img.onload = () => {
                        loadedImages[i - 1] = img;
                        resolve();
                    };
                    img.onerror = () => {
                        // Graceful fallback for missing frames
                        console.warn(`Missing frame ${i}`);
                        resolve();
                    };
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(loadedImages);
            setLoaded(true);
        };

        loadImages();
    }, []);

    useEffect(() => {
        if (!loaded || !canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // High DPI / Retina handling
        const ratio = window.devicePixelRatio || 1;
        // We set internal dimensions, but style ensures it fits visual viewport
        canvas.width = window.innerWidth * ratio;
        canvas.height = window.innerHeight * ratio;
        ctx.scale(ratio, ratio);

        const render = (index: number) => {
            // Clamping index safely
            const safeIndex = Math.max(1, Math.min(index, FRAME_COUNT));
            const imageIndex = Math.floor(safeIndex) - 1;

            const img = images[imageIndex];

            if (img) {
                const canvasW = window.innerWidth;
                const canvasH = window.innerHeight;

                ctx.clearRect(0, 0, canvasW, canvasH);

                const imgRatio = img.width / img.height;
                const canvasRatio = canvasW / canvasH;

                let drawW, drawH, offsetX, offsetY;

                // Object Contain logic
                if (canvasRatio > imgRatio) {
                    drawH = canvasH;
                    drawW = drawH * imgRatio;
                    offsetX = (canvasW - drawW) / 2;
                    offsetY = 0;
                } else {
                    drawW = canvasW;
                    drawH = drawW / imgRatio;
                    offsetX = 0;
                    offsetY = (canvasH - drawH) / 2;
                }

                ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
            }
        };

        // React to scroll changes
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            // Map 0-0.85 to 1-80, clamp after 0.85
            let progress = latest;
            let frameMap = 1 + (progress / 0.85) * (FRAME_COUNT - 1);

            if (progress > 0.85) {
                frameMap = FRAME_COUNT;
            }

            render(frameMap);
        });

        // Initial render call
        const initialProgress = scrollYProgress.get();
        let initialFrame = 1 + (initialProgress / 0.85) * (FRAME_COUNT - 1);
        if (initialProgress > 0.85) initialFrame = FRAME_COUNT;
        render(initialFrame);

        const handleResize = () => {
            canvas.width = window.innerWidth * ratio;
            canvas.height = window.innerHeight * ratio;
            ctx.scale(ratio, ratio);
            // Re-render current frame
            const currentVal = scrollYProgress.get();
            let currentFrame = 1 + (currentVal / 0.85) * (FRAME_COUNT - 1);
            if (currentVal > 0.85) currentFrame = FRAME_COUNT;
            render(currentFrame);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            unsubscribe();
            window.removeEventListener('resize', handleResize);
        }

    }, [loaded, images, scrollYProgress]);

    return (
        <div ref={containerRef} className="h-[450vh] relative bg-homie-green">

            {/* Loading Overlay */}
            {!loaded && (
                <div className="fixed inset-0 flex items-center justify-center bg-homie-green text-white z-50">
                    <div className="flex flex-col items-center gap-4">
                        <span className="text-3xl font-serif">HOMIE</span>
                        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
                            {/* Fake progress or simple indeterministic if we don't track fine-grain */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2 }} // Estimate load time
                                className="h-full bg-white"
                            />
                        </div>
                    </div>
                </div>
            )}

            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className={`absolute inset-0 h-full w-full object-contain pointer-events-none transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                />
                {loaded && <TextOverlay progress={scrollYProgress} />}
            </div>
        </div>
    );
}

