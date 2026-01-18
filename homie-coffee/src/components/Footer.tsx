export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 text-center text-white/40 font-sans text-sm">
            <p>&copy; {new Date().getFullYear()} HOMIE Coffee. All rights reserved.</p>
            <p className="mt-2">Made with ☕ and Code.</p>
        </footer>
    );
}
