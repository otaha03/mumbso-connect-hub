import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import { format } from "date-fns";

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  return (
    <>
      <SEO
        title="Blog - Biotech Articles & Insights"
        description="Read the latest articles on biotechnology, molecular biology, and health sciences written by MUMBSO students and members."
        keywords="biotech blog, molecular biology articles, student research, biotechnology insights, MUMBSO blog"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section
            className="py-20 px-4 text-center relative bg-cover bg-center"
            style={{
              backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/src/assets/research-bg.jpg')",
            }}
          >
            <div className="container mx-auto relative z-10">
              <h1 className="text-5xl font-bold mb-4 text-white">MUMBSO Blog</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Insights, research, and articles on biotechnology and molecular biology
              </p>
            </div>
          </section>

          <section className="py-16 px-4">
            <div className="container mx-auto">
              {isLoading ? (
                <div className="text-center">Loading articles...</div>
              ) : !posts || posts.length === 0 ? (
                <div className="text-center text-muted-foreground">
                  No articles published yet. Check back soon!
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <Card key={post.id} className="hover:shadow-card transition-shadow">
                      {post.featured_image_url && (
                        <div className="aspect-video overflow-hidden rounded-t-lg">
                          <img
                            src={post.featured_image_url}
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          {post.category && <Badge variant="secondary">{post.category}</Badge>}
                        </div>
                        <CardTitle className="text-xl hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {post.excerpt || post.content.substring(0, 150) + "..."}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{post.author_name}</span>
                          </div>
                          {post.published_at && (
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{format(new Date(post.published_at), "MMM d, yyyy")}</span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
