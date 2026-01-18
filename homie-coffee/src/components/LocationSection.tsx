"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, Instagram, X } from "lucide-react";

export default function LocationSection() {
    const [showContact, setShowContact] = useState(false);

    return (
        <section id="visit" className="py-32 px-6 relative overflow-hidden">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Interactive Element / Map Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="aspect-[4/3] bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-8"
                >
                    {/* Replace placeholder with something slightly more visual if desired, or keep generic map pin */}
                    <div className="bg-white/10 p-8 rounded-full">
                        <span className="text-6xl">📍</span>
                    </div>
                </motion.div>

                {/* Info */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <h2 className="text-5xl font-serif text-white mb-10">
                        Come say hi.
                    </h2>

                    <div className="space-y-8 font-sans text-lg text-white/80">
                        <div>
                            <h3 className="text-amber-500 font-bold uppercase tracking-wider mb-2">Location</h3>
                            <p>Lane 7, Koregaon Park</p>
                            <p>Pune, Maharashtra 411001</p>
                        </div>

                        <div>
                            <h3 className="text-amber-500 font-bold uppercase tracking-wider mb-2">Hours</h3>
                            <p>Mon - Fri: 7am - 7pm</p>
                            <p>Sat - Sun: 8am - 6pm</p>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-4">
                        <a
                            href="https://www.google.com/maps?q=18.535347804715173,73.89733867325123"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-white text-homie-green font-bold rounded-full hover:bg-homie-green hover:text-white hover:ring-2 hover:ring-white transition-all cursor-pointer inline-block no-underline"
                        >
                            Get Directions
                        </a>
                        <button
                            onClick={() => setShowContact(true)}
                            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-homie-green transition-all cursor-pointer"
                        >
                            Contact
                        </button>
                    </div>
                </motion.div>

            </div>

            {/* Contact Modal */}
            <AnimatePresence>
                {showContact && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setShowContact(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-homie-green border border-white/20 p-8 rounded-3xl max-w-md w-full relative shadow-2xl"
                        >
                            <button
                                onClick={() => setShowContact(false)}
                                className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors cursor-pointer"
                            >
                                <X size={24} />
                            </button>

                            <h3 className="text-3xl font-serif text-white mb-10 text-center">Get in Touch</h3>

                            <div className="space-y-4">
                                <div className="flex items-center gap-5 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group cursor-default">
                                    <div className="p-3 bg-amber-500/20 rounded-full text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <span className="text-xl text-white font-sans">9356773269</span>
                                </div>

                                <div className="flex items-center gap-5 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group cursor-default">
                                    <div className="p-3 bg-amber-500/20 rounded-full text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <span className="text-xl text-white font-sans">cafe.gmail.com</span>
                                </div>

                                <div className="flex items-center gap-5 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group cursor-default">
                                    <div className="p-3 bg-amber-500/20 rounded-full text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                        <Instagram size={24} />
                                    </div>
                                    <span className="text-xl text-white font-sans">@cafename</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
