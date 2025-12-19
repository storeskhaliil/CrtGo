import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "1,499",
    description: "Perfect for small businesses getting started online",
    features: [
      "5-page responsive website",
      "Basic SEO optimization",
      "Contact form integration",
      "Mobile-friendly design",
      "1 month of support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "3,999",
    description: "Ideal for growing businesses with advanced needs",
    features: [
      "Up to 15 pages",
      "Advanced SEO & analytics",
      "CMS integration",
      "E-commerce ready (up to 50 products)",
      "Custom animations",
      "3 months of support",
      "Performance optimization",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale solutions for large organizations",
    features: [
      "Unlimited pages",
      "Custom web application",
      "API integrations",
      "Advanced security features",
      "Dedicated project manager",
      "12 months of priority support",
      "SLA guarantee",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your project. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? "border-primary/50 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-muted-foreground text-lg">$</span>
                  <span className="font-display text-5xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/project</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "heroOutline"}
                className="w-full"
                size="lg"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Need a custom solution?{" "}
            <a href="#contact" className="text-primary hover:underline">
              Contact us for a free consultation
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
