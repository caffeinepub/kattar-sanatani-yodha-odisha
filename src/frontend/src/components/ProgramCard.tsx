import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { LucideIcon } from 'lucide-react';

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ProgramCard({ icon: Icon, title, description }: ProgramCardProps) {
  return (
    <Card className="border-border/50 hover:border-saffron/50 transition-all duration-300 hover:shadow-md">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-saffron" />
        </div>
        <CardTitle className="text-xl text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
