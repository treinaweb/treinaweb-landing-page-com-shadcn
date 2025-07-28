import { Features } from "@/components/features";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Home() {
  

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
}
