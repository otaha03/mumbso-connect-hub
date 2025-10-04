import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import eventsBg from "@/assets/events-bg.jpg";
import seminarBanner from "@/assets/seminar-banner.jpg";
import { SendEventNotification } from "@/components/SendEventNotification";
import { useIsAdmin } from "@/hooks/useIsAdmin";

const Events = () => {
  const { isAdmin } = useIsAdmin();
  const { data: events } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data } = await supabase
        .from("events")
        .select("*")
        .order("event_date", { ascending: true });
      return data || [];
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={eventsBg}
            alt="Biotechnology conference and events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
        </div>
        <div className="container text-center relative z-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-white">
            Events & Activities
          </h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto">
            Join us for workshops, seminars, and conferences on medical biotechnology
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events?.map((event: any) => {
              const isSeminar = event.title?.includes("Joint Seminar");
              return (
                <Card key={event.id} className="border-2 hover:shadow-card transition-all overflow-hidden">
                  {isSeminar && (
                    <div className="w-full">
                      <img 
                        src={seminarBanner} 
                        alt="Joint Seminar on Research Skills and Career Development"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="inline-block rounded-full bg-primary/10 px-3 py-1">
                        <span className="text-sm font-medium text-primary">{event.event_type}</span>
                      </div>
                      {isAdmin && isSeminar && (
                        <SendEventNotification eventId={event.id} eventTitle={event.title} />
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{format(new Date(event.event_date), "PPP")}</span>
                      </div>
                      {event.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                    <Button className="w-full mt-4" variant="hero">Register</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
