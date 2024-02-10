import { LandingNav } from '@/components/landing-nav';
import { LandingHero } from '@/components/landing-hero';
import { LandingTestimonials } from '@/components/landing-testimonials';
import { LandingAnnouncements } from '@/components/landing-product-announcements';
import { LandingFooter } from '@/components/landing-footer';
import styles from './main.module.css';

export default function Home() {
  return (
    <div className="">
      <LandingNav />
      <LandingHero />
      <LandingAnnouncements />
      {/* <LandingTestimonials /> */}
      <LandingFooter />
    </div>
  );
}
