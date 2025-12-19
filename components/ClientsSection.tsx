import { Star, Quote } from "lucide-react";

const clients = [
  {
    name: "TechFlow Inc.",
    logo: "TF",
    industry: "SaaS",
    testimonial: "NexaWeb transformed our outdated platform into a modern, high-converting website. Our leads increased by 150% within 3 months.",
    author: "Sarah Chen",
    role: "CEO",
    rating: 5,
  },
  {
    name: "GreenLeaf Organics",
    logo: "GL",
    industry: "E-Commerce",
    testimonial: "The e-commerce solution they built handles thousands of orders daily without a hitch. Outstanding quality and support.",
    author: "Michael Torres",
    role: "Founder",
    rating: 5,
  },
  {
    name: "Apex Consulting",
    logo: "AC",
    industry: "B2B Services",
    testimonial: "Professional, responsive, and incredibly talented. They delivered beyond our expectations and on schedule.",
    author: "Emily Watson",
    role: "Marketing Director",
    rating: 5,
  },
  {
    name: "UrbanFit Studio",
    logo: "UF",
    industry: "Fitness",
    testimonial: "Our booking system works flawlessly. Members love the new app and our retention rate has improved significantly.",
    author: "James Rodriguez",
    role: "Owner",
    rating: 5,
  },
];

const clientLogos = [
  { name: "Microsoft", abbr: "M" },
  { name: "Google", abbr: "G" },
  { name: "Shopify", abbr: "S" },
  { name: "Stripe", abbr: "S" },
  { name: "Airbnb", abbr: "A" },
  { name: "Spotify", abbr: "S" },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(174_72%_50%/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join hundreds of companies that rely on our expertise
          </p>
        </div>

        {/* Logo Showcase */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-20 opacity-60">
          {clientLogos.map((logo) => (
            <div
              key={logo.name}
              className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center font-display text-2xl font-bold text-muted-foreground"
            >
              {logo.abbr}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="glass-card p-8 rounded-2xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="font-display font-bold text-primary">{client.logo}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{client.name}</h4>
                    <p className="text-sm text-muted-foreground">{client.industry}</p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-primary/30" />
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                "{client.testimonial}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{client.author}</p>
                  <p className="text-sm text-muted-foreground">{client.role}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(client.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
