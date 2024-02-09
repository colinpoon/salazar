import { LandingNav } from '@/components/landing-nav';
import { LandingHero } from '@/components/landing-hero';
import { LandingTestimonials } from '@/components/landing-testimonials';
import { LandingAnnouncements } from '@/components/landing-product-announcements';

export default function Home() {
  return (
    <div className="h-full">
      <LandingNav />
      <LandingHero />
      {/* <LandingAnnouncements />
      <LandingTestimonials /> */}
    </div>
  );
}
