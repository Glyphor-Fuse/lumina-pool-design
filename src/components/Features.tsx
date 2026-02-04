import { CircleCheck, Layers, Lightbulb, Ruler } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Ruler,
    title: "Precision Engineering",
    description: "Laser-measured topography ensuring your pool fits your landscape perfectly, down to the millimeter.",
    color: "text-blue-500",
  },
  {
    icon: Lightbulb,
    title: "Lumina Glow System",
    description: "Proprietary LED configurations that allow you to paint your water with 16 million colors via smartphone.",
    color: "text-amber-500",
  },
  {
    icon: Layers,
    title: "Triple-Layer Shell",
    description: "Reinforced concrete composite designed to withstand Texas soil shifts and temperature extremes.",
    color: "text-cyan-500",
  },
  {
    icon: CheckCircle2,
    title: "Lifetime Structural",
    description: "We stand behind our shells forever. Peace of mind comes standard with every Lumina project.",
    color: "text-green-500",
  },
];

export default function Features() {
  return (
    <section id="design" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-700 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100/50 dark:bg-cyan-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Not Just a Pool. <br/> A Water Experience.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            We move beyond standard templates to deliver aquatic architecture. Every curve, depth, and light fixture is intentional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-slate-100 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Big Feature Highlight */}
        <div className="mt-24 rounded-3xl overflow-hidden relative min-h-[500px] flex items-center">
            <img 
                src="/images/feature-infinity.jpg" 
                alt="Infinity Edge Detail" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
            
            <div className="relative z-10 p-8 md:p-16 max-w-xl">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">The Infinity Distinction</h3>
                <p className="text-slate-200 text-lg mb-8">
                    Our signature vanishing edge design blends your water line with the horizon, creating a seamless visual connection between your home and the Texas sky.
                </p>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <p className="text-3xl font-bold text-cyan-400">100%</p>
                        <p className="text-sm text-slate-300">Auto-Leveling</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-cyan-400">Silent</p>
                        <p className="text-sm text-slate-300">Catch Basin Tech</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
