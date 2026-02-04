import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 py-16 border-t border-slate-800 dark:border-white/10 transition-colors duration-700">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="text-3xl font-bold tracking-tighter text-white mb-6 block">
                LUMINA<span className="text-cyan-500">POOL</span>
            </a>
            <p className="text-slate-400 max-w-sm mb-6">
                Redefining luxury aquatic living in Haslet and North Fort Worth. Where engineering meets art, and water meets light.
            </p>
            <div className="flex gap-4">
                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                    <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                    <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                    <Linkedin className="w-5 h-5 text-white" />
                </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Explore</h4>
            <ul className="space-y-2">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Philosophy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Process</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
                <li>Haslet, TX 76052</li>
                <li>(817) 555-0123</li>
                <li>design@luminapools.com</li>
                <li className="pt-4 text-xs">© {new Date().getFullYear()} Lumina Pool Design.</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
