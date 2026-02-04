import { ArrowRight, Star, Wind, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden transition-colors duration-700 bg-slate-50 dark:bg-slate-950">
      
      {/* Background Images - Absolute Positioned */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Day Image */}
        <div className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-1000 ease-in-out">
             <img 
                src="/images/hero-day.jpg" 
                alt="Luxury pool day" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/30 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/50 to-transparent" />
        </div>
        
        {/* Night Image */}
        <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-1000 ease-in-out">
            <img 
                src="/images/hero-night.jpg" 
                alt="Luxury pool night" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-cyan-300">
              Now Serving Haslet & North Fort Worth
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1] drop-shadow-sm transition-colors duration-700">
            Sculpting Water <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-purple-500 transition-all duration-700">
              Into Art.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed transition-colors duration-700">
            Lumina Pool Design fuses architectural engineering with interactive lighting to create backyard sanctuaries that transform from day to night.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full text-base px-8 bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300">
              Start Your Design
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full text-base px-8 border-slate-300 dark:border-white/20 bg-white/50 dark:bg-black/20 backdrop-blur-sm text-slate-900 dark:text-white hover:bg-white/80 dark:hover:bg-white/10">
              View Gallery
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-md border-t border-slate-200 dark:border-white/10 pt-8 transition-colors duration-700">
             <div>
                <Wind className="w-6 h-6 text-cyan-600 dark:text-cyan-400 mb-2" />
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Smart Flow</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Eco-circulation</p>
             </div>
             <div>
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-2" />
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Glow Tech</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">LED Integration</p>
             </div>
             <div>
                <Star className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Pure Clear</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Ozone Filter</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
