import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <Badge variant="dark" className="mb-4">
          🎉 Novo curso disponível
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Domine shadcn/ui e Crie Interfaces incríveis
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Aprenda a construir componentes reutilizáveis, acessíveis e bonitos
          com shadcn/ui. Do básico ao avançado com projetos práticos e exemplos
          reais
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 cursor-pointer">
            Começar Curso Gratuito
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 bg-transparent cursor-pointer"
          >
            Ver Demonstração
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary">30+</div>
            <div className="text-sm text-muted-foreground">Componentes</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">10h</div>
            <div className="text-sm text-muted-foreground">de Conteúdo</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">1000+</div>
            <div className="text-sm text-muted-foreground">Alunos</div>
          </div>
        </div>
      </div>
    </section>
  );
}
