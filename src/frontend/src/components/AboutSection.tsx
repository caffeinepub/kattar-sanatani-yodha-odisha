import { Heart, Users, BookOpen } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-saffron mb-4">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Committed to preserving our sacred traditions and serving our community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/assets/images (1).jpg"
              alt="Community Service"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-saffron" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To uphold and propagate the eternal values of Sanatana Dharma while serving the people of Odisha through cultural, educational, and social initiatives rooted in our ancient wisdom.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-terracotta" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Our Community</h3>
                <p className="text-muted-foreground">
                  We are a dedicated group of individuals committed to preserving our cultural heritage, supporting traditional practices, and fostering unity among devotees across Odisha.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-gold" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Our Values</h3>
                <p className="text-muted-foreground">
                  Dharma, devotion, service, and compassionate action guide everything we do. We believe in strengthening our community through education, tradition, and compassionate action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
