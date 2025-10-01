import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Users } from "lucide-react";
import membersBg from "@/assets/members-bg.jpg";

const Members = () => {
  const { data: leadership } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const { data } = await supabase.from("members").select("*").order("display_order");
      return data || [];
    },
  });

  const { data: community } = useQuery({
    queryKey: ["community_members"],
    queryFn: async () => {
      const { data } = await supabase.from("community_members").select("*").order("joined_at", { ascending: false });
      return data || [];
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={membersBg}
            alt="MUMBSO team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/75" />
        </div>
        <div className="container text-center relative z-10">
          <h1 className="text-4xl font-bold mb-6 text-white">Our Team</h1>
          <p className="text-xl text-white/95">Meet the MUMBSO family</p>
        </div>
      </section>
      
      {/* Leadership Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Leadership Team</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {leadership?.map((m: any) => (
              <Card key={m.id}>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {m.name.charAt(0)}
                  </div>
                  <h3 className="font-bold text-lg">{m.name}</h3>
                  <p className="text-primary text-sm mb-2">{m.position}</p>
                  <p className="text-muted-foreground text-sm">{m.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Members Section */}
      <section className="py-20 bg-accent/5">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Community Members</h2>
            <p className="text-muted-foreground">Our growing community of biotechnology enthusiasts</p>
          </div>
          <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-5">
            {community?.map((m: any) => (
              <Card key={m.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {m.name.charAt(0)}
                  </div>
                  <h4 className="font-semibold text-sm">{m.name}</h4>
                  {m.year_of_study && (
                    <p className="text-xs text-primary">{m.year_of_study}</p>
                  )}
                  {m.course && (
                    <p className="text-xs text-muted-foreground mt-1">{m.course}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          {(!community || community.length === 0) && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">No community members yet. Be the first to join!</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Members;
