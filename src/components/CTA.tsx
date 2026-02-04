import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-100 dark:bg-slate-900 transition-colors duration-700">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
         <img src="/images/hero-day.jpg" alt="Background pattern" className="w-full h-full object-cover grayscale" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 dark:border-white/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Ready to Transform Your Backyard?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Consultations are complimentary. We'll visit your property, assess the sunlight and grade, and provide an initial vision.
              </p>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="flex -space-x-3">
                   <img src="/images/avatar-1.jpg" alt="Designer" className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800" />
                   <img src="/images/avatar-2.jpg" alt="Engineer" className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800" />
                   <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center text-xs font-bold text-cyan-700 dark:text-cyan-300">+3</div>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                    <span className="font-bold text-slate-900 dark:text-white">5-Star Rated</span> Design Team
                </div>
              </div>
            </div>

            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-white/10" />
                    <Input placeholder="Last Name" className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-white/10" />
                </div>
                <Input placeholder="Email Address" type="email" className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-white/10" />
                <Textarea placeholder="Tell us about your dream pool..." className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-white/10" />
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-6">
                    Request Consultation
                </Button>
                <p className="text-xs text-center text-slate-400">
                    No commitment required. We respect your privacy.
                </p>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
