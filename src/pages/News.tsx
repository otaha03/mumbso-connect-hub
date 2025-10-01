import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import newsBg from "@/assets/news-bg.jpg";

const News = () => {
  const { data: news } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const { data } = await supabase.from("news").select("*").eq("published", true).order("created_at", { ascending: false });
      return data || [];
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={newsBg}
            alt="Biotechnology news and discoveries"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
        </div>
        <div className="container text-center relative z-10">
          <h1 className="text-4xl font-bold mb-6 text-white">News & Blog</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news?.map((n: any) => (
              <Card key={n.id}>
                <CardContent className="p-6">
                  <div className="mb-2 text-sm text-primary">{n.category}</div>
                  <h3 className="font-bold text-lg mb-2">{n.title}</h3>
                  <p className="text-muted-foreground text-sm">{n.excerpt}</p>
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

export default News;
