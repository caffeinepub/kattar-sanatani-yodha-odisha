import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { UserPlus, HandHeart, Calendar, Share2 } from 'lucide-react';

export default function GetInvolvedSection() {
  const ways = [
    {
      icon: UserPlus,
      title: 'Become a Member',
      description: 'Join our community of dedicated individuals working to preserve and promote Sanatana Dharma values.',
    },
    {
      icon: HandHeart,
      title: 'Volunteer',
      description: 'Contribute your time and skills to our various programs, events, and community service initiatives.',
    },
    {
      icon: Calendar,
      title: 'Attend Events',
      description: 'Participate in our cultural programs, festivals, satsangs, and educational workshops.',
    },
    {
      icon: Share2,
      title: 'Spread Awareness',
      description: 'Help us reach more people by sharing our mission and activities within your network.',
    },
  ];

  return (
    <section id="get-involved" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-saffron mb-4">
            Get Involved
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us in our mission to preserve our heritage and serve our community
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ways.map((way, index) => (
            <Card key={index} className="text-center border-border/50 hover:border-terracotta/50 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center mx-auto mb-4">
                  <way.icon className="w-8 h-8 text-terracotta" />
                </div>
                <CardTitle className="text-lg">{way.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {way.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg mb-6 text-foreground/90">
            Ready to make a difference? We welcome everyone who shares our values and commitment.
          </p>
          <Button
            size="lg"
            className="bg-terracotta hover:bg-terracotta/90 text-white font-semibold"
            asChild
          >
            <a
              href="https://kv8n70np.forms.app/untitled-form"
              target="_blank"
              rel="noopener noreferrer"
            >
              Become a Member
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
