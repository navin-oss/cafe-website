"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface ProductCardProps {
    src: string;
    title: string;
    description: string;
}

export default function ProductCard({ src, title, description }: ProductCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative h-[28rem] w-full rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-between p-6 cursor-pointer group shadow-xl overflow-hidden"
        >
            {/* Image Container - Fixed height for alignment */}
            <div
                style={{
                    transform: "translateZ(80px)",
                    transformStyle: "preserve-3d",
                }}
                className="flex-1 w-full flex items-center justify-center p-4 min-h-0"
            >
                <img
                    src={src}
                    alt={title}
                    className="h-full w-auto object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Info Container - Glass effect for readability */}
            <div
                style={{ transform: "translateZ(60px)" }}
                className="relative w-full mt-4 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/5 text-center shadow-lg"
            >
                <h3 className="text-2xl font-serif text-white mb-1">{title}</h3>
                <p className="text-white/80 text-sm font-sans font-medium">{description}</p>
            </div>

            {/* Gradient Shine */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>
    );
}
