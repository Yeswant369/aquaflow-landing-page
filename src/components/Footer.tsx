import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

export function Footer() {
  return (
    <footer className="hero-gradient text-primary-foreground py-16">
      <div className="container-width px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Vyvora" className="w-14 h-14 rounded-full" />
              <div>
                <span className="font-heading text-2xl font-bold">Vyvora</span>
                <p className="text-primary-foreground/70 text-sm">A Drop of Freshness</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 max-w-md mb-6">
              Premium packaged drinking water. Reverse Osmosis treated, UV sterilized, and ozonated for your health and safety.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 rounded-full bg-primary-foreground/10 text-sm">BIS Certified</span>
              <span className="px-3 py-1 rounded-full bg-primary-foreground/10 text-sm">FSSAI Approved</span>
              <span className="px-3 py-1 rounded-full bg-primary-foreground/10 text-sm">BPA Free</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#custom" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Custom Labels
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>+91 70952 27142</p>
                  <p className="text-sm text-primary-foreground/70">+91 95535 09407</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">greenlifefoods6@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Vijayawada, Andhra Pradesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Vyvora Water Plant. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Manufactured by Green Life Foods, Vijayawada
          </p>
        </div>
      </div>
    </footer>
  );
}
