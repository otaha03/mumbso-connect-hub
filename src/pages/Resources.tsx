import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20 bg-gradient-accent text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-6">Student Resources</h1>
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
