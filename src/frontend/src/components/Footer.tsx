import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'kattar-sanatani-yodha'
  );

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/assets/generated/logo.dim_200x200.png" 
                alt="Kattar Sanatani Yodha Logo" 
                className="h-10 w-10 rounded-full"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-saffron">Kattar Sanatani Yodha</span>
                <span className="text-xs text-muted-foreground">(Odisha)</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Preserving Sanatana Dharma values and serving our community with devotion and integrity.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-saffron transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-saffron transition-colors"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-saffron transition-colors"
                >
                  Get Involved
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-saffron transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Connect With Us</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Join our community and stay updated with our activities and events.
            </p>
            <p className="text-sm text-muted-foreground">
              Email: info@kattarsanataniyodha.org
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Kattar Sanatani Yodha (Odisha). All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-saffron fill-saffron" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
