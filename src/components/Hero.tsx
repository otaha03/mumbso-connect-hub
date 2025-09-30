import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lab.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Medical Biotechnology Laboratory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5">
            <span className="text-sm font-medium text-primary">
              Medical Biotechnology with Information Technology
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Connecting Medical Biotechnology and Technology
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl max-w-2xl">
            MUMBSO is the official student-run organization at Maseno University empowering the next generation of biotechnology researchers and innovators.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Join MUMBSO</Link>
            </Button>
            <Button asChild variant="secondary" size="xl">
              <Link to="/events">Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
