"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="story" className="relative min-h-screen flex items-center justify-center py-20 px-6">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
                        More than just coffee.
                    </h2>
                    <p className="text-lg md:text-xl font-sans text-white/80 leading-relaxed mb-6">
                        HOMIE started with a simple belief: coffee connects us. From the farmers who nurture the cherry to the baristas who pour the art, every step is a handshake.
                    </p>
                    <p className="text-lg md:text-xl font-sans text-white/80 leading-relaxed">
                        We roast small batches to highlight the unique character of every bean, ensuring that what ends in your cup is nothing short of pure origin magic.
                    </p>
                </motion.div>

                {/* Image/Visual Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="aspect-square bg-white/5 rounded-2xl overflow-hidden relative border border-white/10 flex items-center justify-center p-8"
                >
                    {/* Placeholder for an actual lifestyle image */}
                    <div className="text-center">
                        <span className="block text-9xl">🌿</span>
                        <p className="mt-4 text-white/40 font-serif italic">Roots run deep.</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
