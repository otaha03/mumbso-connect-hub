import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import researchBg from "@/assets/research-bg.jpg";

const Research = () => {
  const projects = [
    { title: "Antimicrobial Resistance Surveillance", description: "Using machine learning to predict antibiotic resistance patterns in bacterial infections across Kenya." },
    { title: "Point-of-Care Diagnostics", description: "Developing rapid diagnostic tests for infectious diseases using biosensor technology." },
    { title: "Genomic Epidemiology", description: "Tracking disease outbreaks using whole genome sequencing and bioinformatics analysis." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={researchBg}
            alt="Advanced medical research laboratory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
        </div>
        <div className="container text-center relative z-10">
          <h1 className="text-4xl font-bold mb-6 text-white">Research & Projects</h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto">Student-led research advancing medical biotechnology</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <Card key={i} className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-muted-foreground">{p.description}</p>
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

export default Research;
