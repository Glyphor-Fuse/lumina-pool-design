import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-black transition-colors duration-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Transparent Investment</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We believe in upfront clarity. No hidden fees, no surprises. Just pure value engineered into three distinct tiers of luxury.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Tier 1 */}
          <div className="relative p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">The Essential</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Perfect for modern family living.</p>
            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
              $65k <span className="text-lg font-normal text-slate-500">starts at</span>
            </div>
            <ul className="space-y-4 mb-8">
              {["Geometric or Freeform Shape", "Lumina LED Standard Pack", "Cool-Touch Decking (400 sq ft)", "Saltwater Sanitation", "Smartphone Automation"].map((item) => (
                <li key={item} className="flex items-center text-slate-700 dark:text-slate-300">
                  <Check className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20">
              Select Essential
            </Button>
          </div>

          {/* Tier 2 - Highlighted */}
          <div className="relative p-8 rounded-3xl bg-slate-900 dark:bg-cyan-950/30 border border-cyan-500 shadow-2xl scale-105 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
              Most Popular
            </div>
            <h3 className="text-xl font-bold text-white mb-2">The Retreat</h3>
            <p className="text-sm text-slate-400 mb-6">Resort-style features and finishes.</p>
            <div className="text-4xl font-bold text-white mb-8">
              $95k <span className="text-lg font-normal text-slate-400">starts at</span>
            </div>
            <ul className="space-y-4 mb-8">
              {["Includes 'Essential' Features", "Heated Spa with 6 Jets", "Water Feature (Sheer Descent)", "Premium Pebble Interior", "Lumina Glow Pro (RGB Lighting)"].map((item) => (
                <li key={item} className="flex items-center text-slate-200">
                  <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold shadow-lg shadow-cyan-500/25">
              Select Retreat
            </Button>
          </div>

          {/* Tier 3 */}
          <div className="relative p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">The Architectural</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Zero-compromise engineering.</p>
            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
              Custom <span className="text-lg font-normal text-slate-500">quoted</span>
            </div>
            <ul className="space-y-4 mb-8">
              {["Infinity / Vanishing Edge", "Fire & Water Features", "Full Automation Suite", "In-Floor Cleaning System", "Outdoor Kitchen Integration"].map((item) => (
                <li key={item} className="flex items-center text-slate-700 dark:text-slate-300">
                  <Check className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20">
              Contact Designer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
