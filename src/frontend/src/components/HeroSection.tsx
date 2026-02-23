import { Button } from './ui/button';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/kattar sanatani yodha logo.jpg"
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      <div className="container relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-saffron">
            Kattar Sanatani Yodha
          </h1>
          <p className="text-xl md:text-2xl text-terracotta font-semibold mb-4">
            Odisha
          </p>
          <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed">
            Dedicated to preserving and promoting Sanatana Dharma values, cultural heritage, and community service across Odisha. Together, we strengthen our traditions and serve our community with devotion and integrity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-saffron hover:bg-saffron/90 text-white font-semibold"
              onClick={() => scrollToSection('get-involved')}
            >
              Join Our Mission
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-saffron text-saffron hover:bg-saffron/10"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
