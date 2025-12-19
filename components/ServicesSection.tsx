import { Globe, Code, Palette, Rocket, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites built with modern technologies that are fast, responsive, and SEO-optimized.",
  },
  {
    icon: Code,
    title: "Web Applications",
    description: "Powerful web apps with complex functionality, real-time features, and seamless user experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to engage users and elevate your brand identity.",
  },
  {
    icon: Rocket,
    title: "E-Commerce",
    description: "Full-featured online stores with secure payments, inventory management, and analytics.",
  },
  {
    icon: Shield,
    title: "Maintenance & Security",
    description: "Ongoing support, updates, and security monitoring to keep your site running smoothly.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your existing site with advanced optimization techniques and best practices.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(174_72%_50%/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive web solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
