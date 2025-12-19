import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Services: ["Web Development", "Web Applications", "UI/UX Design", "E-Commerce", "Maintenance"],
    Company: ["About Us", "Our Work", "Careers", "Blog", "Contact"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer id="contact" className="pt-24 pb-8 relative border-t border-border/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(174_72%_50%/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* CTA Section */}
        <div className="glass-card rounded-3xl p-12 mb-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(174_72%_50%/0.1),transparent_50%)]" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Ready to Build Something <span className="gradient-text">Amazing?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Let's discuss your project and create a digital solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl">
                Schedule a Call <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">N</span>
              </div>
              <span className="font-display font-bold text-xl">NexaWeb</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Crafting exceptional digital experiences that help businesses grow and succeed in the modern world.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@nexaweb.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                hello@nexaweb.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                San Francisco, CA
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 NexaWeb. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;