import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import resourcesBg from "@/assets/resources-bg.jpg";

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={resourcesBg}
            alt="Digital biotechnology resources library"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/85 to-accent/75" />
        </div>
        <div className="container text-center relative z-10">
          <h1 className="text-4xl font-bold mb-6 text-white">Student Resources</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container max-w-4xl">
          <Card className="mb-6">
            <CardContent className="p-6 flex justify-between items-center">
              <div className="flex gap-3 items-start">
                <FileText className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Laboratory Safety Guide</h3>
                  <p className="text-sm text-muted-foreground">Essential biosafety protocols</p>
                </div>
              </div>
              <Button variant="outline" size="sm"><Download className="h-4 w-4 mr-2" />Download</Button>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Resources;
