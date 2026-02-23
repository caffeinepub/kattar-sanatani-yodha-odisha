import ProgramCard from './ProgramCard';
import { Flame, BookOpen, Users, Heart, Sparkles, HandHeart } from 'lucide-react';

export default function ProgramsSection() {
  const programs = [
    {
      icon: Flame,
      title: 'Cultural Preservation',
      description: 'Organizing traditional festivals, rituals, and ceremonies to keep our sacred customs alive for future generations.',
    },
    {
      icon: BookOpen,
      title: 'Dharmic Education',
      description: 'Conducting classes and workshops on Vedic scriptures, Sanskrit, and traditional knowledge systems.',
    },
    {
      icon: Users,
      title: 'Community Gatherings',
      description: 'Regular satsangs, bhajan sessions, and spiritual discourses to strengthen our collective faith and unity.',
    },
    {
      icon: Heart,
      title: 'Social Service',
      description: 'Serving the community through food distribution, healthcare camps, and support for those in need.',
    },
    {
      icon: Sparkles,
      title: 'Youth Engagement',
      description: 'Inspiring young minds to connect with their roots through cultural programs, camps, and mentorship.',
    },
    {
      icon: HandHeart,
      title: 'Temple Support',
      description: 'Supporting local temples and sacred sites through maintenance, renovation, and preservation efforts.',
    },
  ];

  return (
    <section id="programs" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-saffron mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Initiatives dedicated to preserving our heritage and serving our community
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              icon={program.icon}
              title={program.title}
              description={program.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
