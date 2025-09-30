import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const Gallery = () => {
  const { data: gallery } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const { data } = await supabase.from("gallery").select("*").order("created_at", { ascending: false });
      return data || [];
    },
  });

  const categories = ["Year 1", "Year 2", "Year 3", "Year 4", "Alumni", "Lecturers", "Community Work", "Field Trips", "Workshops", "Conferences"];

  const getImagesByCategory = (category: string) => {
    return gallery?.filter((img: any) => img.category === category) || [];
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20 bg-gradient-secondary text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-white/90">Photos from our events and activities</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container space-y-16">
          {categories.map((category) => {
            const images = getImagesByCategory(category);
            if (images.length === 0) return null;
            
            return (
              <div key={category}>
                <h2 className="text-3xl font-bold mb-6 text-primary">{category}</h2>
                <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
                  {images.map((img: any) => (
                    <div key={img.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
                      <img 
                        src={img.image_url} 
                        alt={img.title || category}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {img.title && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <p className="text-white font-medium">{img.title}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Gallery;
