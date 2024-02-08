import { LandingNav } from '@/components/landing-nav';
import { LandingHero } from '@/components/landing-hero';

export default function Home() {
  return (
    <div className="h-full">
      <LandingNav />
      <LandingHero />
    </div>
  );
}
