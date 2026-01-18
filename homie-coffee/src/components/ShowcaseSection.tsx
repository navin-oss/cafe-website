"use client";

import ProductCard from "./ProductCard";

const ITEMS = [
    {
        src: "/images/cake.png",
        title: "Velvet Cake",
        description: "Decadence in every layer. Rich, moist, and absolutely unforgettable."
    },
    {
        src: "/images/chocolate.png",
        title: "Dark Cacao",
        description: "Pure cacao bliss. Smooth, intense, and satisfyingly bitter."
    },
    {
        src: "/images/coffee.png",
        title: "House Blend",
        description: "The daily ritual. Aromatic, bold, and brewed to perfection."
    },
    {
        src: "/images/mangoshake.png",
        title: "Mango Tango",
        description: "Tropical paradise in a glass. Sweet, creamy, and refreshing."
    },
    {
        src: "/images/shake.png",
        title: "Classic Shake",
        description: "Thick, hand-spun, and dreamy. The ultimate comfort treat."
    },
    {
        src: "/images/straberry.png",
        title: "Strawberry Delight",
        description: "Bursting with berry freshness. Sweet, tart, and pink."
    },
];

export default function ShowcaseSection() {
    return (
        <section className="py-32 px-6 bg-homie-green relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">Our Favorites</h2>
                    <p className="text-white/60 text-xl max-w-2xl mx-auto font-sans">
                        Curated selections that define the Homie experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 perspective-1000">
                    {ITEMS.map((item) => (
                        <ProductCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
