"use client";

import { motion } from "framer-motion";

const MENU_ITEMS = [
    { name: "The OG Latte", desc: "Double shot, silky milk, HOMIE art.", price: "₹250" },
    { name: "Velvet Cold Brew", desc: "Steeped 24h, nitrogen infused.", price: "₹280" },
    { name: "Matcha Cloud", desc: "Ceremonial grade, vanilla foam.", price: "₹320" },
    { name: "Espresso Tonic", desc: "Bright acidity, botanical tonic.", price: "₹280" },
    { name: "Cascara Soda", desc: "Coffee cherry tea, sparkling water.", price: "₹240" },
    { name: "Homie Buns", desc: "Cardamom glaze, soft brioche.", price: "₹180" },
];

export default function MenuSection() {
    return (
        <section id="menu" className="py-32 px-6 bg-black/20">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-5xl md:text-7xl font-serif text-white text-center mb-20"
                >
                    The Lineup
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MENU_ITEMS.map((item, i) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                        >
                            <div className="flex justify-between items-baseline mb-4">
                                <h3 className="text-2xl font-serif text-white group-hover:text-amber-500 transition-colors">{item.name}</h3>
                                <span className="text-xl font-mono text-white/60">{item.price}</span>
                            </div>
                            <p className="text-white/70 font-sans">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
