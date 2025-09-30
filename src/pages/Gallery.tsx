import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Gallery = () => {
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
        <div className="container">
          <p className="text-center text-muted-foreground">Gallery images will be displayed here</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Gallery;
