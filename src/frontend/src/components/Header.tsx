import { Menu, X, Shield } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from './ui/button';
import { useAdminCheck } from '../hooks/useAdminCheck';
import { useInternetIdentity } from '../hooks/useInternetIdentity';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { identity } = useInternetIdentity();
  const { data: isAdmin } = useAdminCheck();

  const isAuthenticated = !!identity;
  const showAdminLink = isAuthenticated && isAdmin;

  const scrollToSection = (id: string) => {
    // Navigate to home first if not already there
    navigate({ to: '/' }).then(() => {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    });
    setMobileMenuOpen(false);
  };

  const goToAdmin = () => {
    navigate({ to: '/admin' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <button
          onClick={() => navigate({ to: '/' })}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img 
            src="/assets/kattar sanatani yodha logo.jpg" 
            alt="Kattar Sanatani Yodha Logo" 
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight text-saffron">Kattar Sanatani Yodha</span>
            <span className="text-xs text-muted-foreground">(Odisha)</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-foreground/80 hover:text-saffron transition-colors"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('programs')}
            className="text-sm font-medium text-foreground/80 hover:text-saffron transition-colors"
          >
            Programs
          </button>
          <button
            onClick={() => scrollToSection('get-involved')}
            className="text-sm font-medium text-foreground/80 hover:text-saffron transition-colors"
          >
            Get Involved
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-foreground/80 hover:text-saffron transition-colors"
          >
            Contact
          </button>
          {showAdminLink && (
            <button
              onClick={goToAdmin}
              className="text-sm font-medium text-saffron hover:text-saffron/80 transition-colors flex items-center gap-1"
            >
              <Shield className="h-4 w-4" />
              Admin
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <nav className="container flex flex-col gap-4 py-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-foreground/80 hover:text-saffron transition-colors text-left"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="text-sm font-medium text-foreground/80 hover:text-saffron transition-colors text-left"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection('get-involved')}
              className="text-sm font-medium text-foreground/80 hover:text-saffron transition-colors text-left"
            >
              Get Involved
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-foreground/80 hover:text-saffron transition-colors text-left"
            >
              Contact
            </button>
            {showAdminLink && (
              <button
                onClick={goToAdmin}
                className="text-sm font-medium text-saffron hover:text-saffron/80 transition-colors text-left flex items-center gap-1"
              >
                <Shield className="h-4 w-4" />
                Admin
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
