import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Theme Toggle
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-gray-200 dark:border-white/10 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tighter transition-colors duration-300">
          <span className="text-slate-900 dark:text-white">LUMINA</span>
          <span className="text-cyan-500 dark:text-cyan-400">POOL</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {["Philosophy", "Design", "Pricing", "Projects"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              {item}
            </a>
          ))}
          
          {/* Day/Night Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-yellow-300 hover:scale-110 transition-transform duration-300"
            aria-label="Toggle Day/Night Mode"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>

          <Button variant="default" className="bg-slate-900 dark:bg-cyan-500 dark:text-black dark:hover:bg-cyan-400 text-white rounded-full px-6">
            Book Consultation
          </Button>
        </div>

        {/* Mobile Toggle & Menu */}
        <div className="flex items-center gap-4 md:hidden">
           <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-yellow-300"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-900 dark:text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 p-6 md:hidden flex flex-col space-y-4 animate-in slide-in-from-top-5">
           {["Philosophy", "Design", "Pricing", "Projects"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-slate-800 dark:text-slate-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white mt-4">
            Start Your Project
          </Button>
        </div>
      )}
    </nav>
  );
}
