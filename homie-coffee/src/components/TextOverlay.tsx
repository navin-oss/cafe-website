"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import React from "react";

// Text Segments with their visible ranges (0-1 scroll progress)
const TEXT_SEGMENTS = [
    {
        text: "HOMIE Coffee. Pure Origin.",
        start: 0,
        end: 0.15,
        align: "center",
        className: "text-5xl md:text-7xl font-serif text-center",
    },
    {
        text: "The journey begins with the cherry.",
        start: 0.25,
        end: 0.40,
        align: "left",
        className: "text-4xl md:text-6xl font-sans text-left ml-10 md:ml-32 max-w-xl",
    },
    {
        text: "Roasted for Depth. Ground for Flavor.",
        start: 0.50,
        end: 0.65,
        align: "right",
        className: "text-4xl md:text-6xl font-serif text-right mr-10 md:mr-32 ml-auto max-w-xl",
    },
    {
        text: "Made for the Homies.",
        start: 0.80,
        end: 1.0,
        align: "center",
        className: "text-6xl md:text-8xl font-serif text-center mb-20",
    },
];

interface TextOverlayProps {
    progress: MotionValue<number>;
}

export default function TextOverlay({ progress }: TextOverlayProps) {
    return (
        <div className="fixed inset-0 pointer-events-none flex flex-col justify-center z-10 w-full h-full">
            {TEXT_SEGMENTS.map((segment, index) => (
                <TextSegment key={index} segment={segment} progress={progress} />
            ))}
        </div>
    );
}

function TextSegment({ segment, progress }: { segment: any, progress: MotionValue<number> }) {
    const opacity = useTransform(
        progress,
        [segment.start, segment.start + 0.05, segment.end - 0.05, segment.end],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        progress,
        [segment.start, segment.end],
        [50, -50]
    );

    // Flex alignment mapping
    let justifyClass = "justify-center";
    if (segment.align === "left") justifyClass = "justify-start";
    if (segment.align === "right") justifyClass = "justify-end";

    return (
        <motion.div
            style={{ opacity, y }}
            className={`absolute w-full px-4 flex ${justifyClass}`}
        >
            <span className={segment.className}>{segment.text}</span>
        </motion.div>
    );
}
