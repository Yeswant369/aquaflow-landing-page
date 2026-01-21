import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpeg';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Products', href: '#products' },
  { name: 'Custom Labels', href: '#custom' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-width px-4 md:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Vyvora Logo"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <span className={`font-heading text-xl font-bold ${isScrolled ? 'text-primary' : 'text-primary-foreground'}`}>
                Vyvora
              </span>
              <p className={`text-xs ${isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}>
                A Drop of Freshness
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`font-medium text-sm transition-colors hover:text-accent ${
                    isScrolled ? 'text-foreground' : 'text-primary-foreground'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+917095227142">
              <Button variant={isScrolled ? 'default' : 'hero'} size="default">
                <Phone className="w-4 h-4" />
                Contact Us
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 font-medium ${
                      isScrolled ? 'text-foreground' : 'text-primary-foreground'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <a href="tel:+917095227142" className="block pt-4">
                  <Button variant="water" size="lg" className="w-full">
                    <Phone className="w-4 h-4" />
                    Contact Us
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
