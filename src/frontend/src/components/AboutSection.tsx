import { Heart, Users, BookOpen } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-saffron mb-4">
            हमारे बारे में
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            सनातन धर्म के हमेशा रहने वाले मूल्यों को बनाए रखना और उनका प्रचार करना, साथ ही हमारे पुराने ज्ञान पर आधारित सांस्कृतिक, शैक्षिक और सामाजिक पहलों के ज़रिए ओडिशा के लोगों की सेवा करना।
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
                  सनातन धर्म के हमेशा रहने वाले मूल्यों को बनाए रखना और उनका प्रचार करना, साथ ही हमारे पुराने ज्ञान पर आधारित सांस्कृतिक, शैक्षिक और सामाजिक पहलों के ज़रिए ओडिशा के लोगों की सेवा करना।
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
