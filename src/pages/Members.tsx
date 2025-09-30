import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const Members = () => {
  const { data: members } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const { data } = await supabase.from("members").select("*").order("display_order");
      return data || [];
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20 bg-gradient-secondary text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-white/90">Meet the MUMBSO leadership</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {members?.map((m: any) => (
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
      <Footer />
    </div>
  );
};

export default Members;
