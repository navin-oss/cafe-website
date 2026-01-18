"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const IMAGES = [
    { src: "/images/cake.png", alt: "Delicious Cake", x: "10%", y: "10%", rotate: 10, scale: 0.8 },
    { src: "/images/chocolate.png", alt: "Rich Chocolate", x: "80%", y: "25%", rotate: -15, scale: 0.9 },
    { src: "/images/coffee.png", alt: "Fresh Coffee", x: "5%", y: "50%", rotate: 20, scale: 1.1 },
    { src: "/images/mangoshake.png", alt: "Mango Shake", x: "85%", y: "70%", rotate: -10, scale: 0.85 },
    { src: "/images/shake.png", alt: "Classic Shake", x: "15%", y: "85%", rotate: 5, scale: 0.9 },
];

export default function FloatingShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Create different parallax speeds for each item
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -350]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const y5 = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const transforms = [y1, y2, y3, y4, y5];

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {IMAGES.map((img, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: "absolute",
                        left: img.x,
                        top: img.y,
                        y: transforms[i],
                        zIndex: 0, // Behind content by default, but let's see. Maybe 0 is fine if content is z-10?
                        // Actually, parent has z-10. If we want these behind relative to parent content, we might need negative z or careful placement.
                        // Let's rely on standard stacking context. If this is IN the wrapper with sections, and sections have their own stacking?
                        // Let's try z-0 and sections should be careful.
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.6, scale: img.scale, rotate: img.rotate }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                        duration: 1,
                        delay: i * 0.2,
                        type: "spring",
                        bounce: 0.4
                    }}
                >
                    <img
                        src={img.src}
                        alt={img.alt}
                        className="w-32 md:w-48 lg:w-64 object-contain drop-shadow-2xl"
                        loading="lazy"
                    />
                </motion.div>
            ))}
        </div>
    );
}
