import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Testimonials() {
  const depoimentos = [
    {
      id: 1,
      name: "Ana Silva",
      role: "Frontend Developer",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Este curso mudou completamente minha forma de desenvolver interfaces. Os componentes do shadcn/ui são incríveis!",
    },
    {
      id: 2,
      name: "Carlos Santos",
      role: "Full Stack Developer",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Finalmente entendi como criar um design system profissional. Recomendo para todos os desenvolvedores!",
    },
    {
      id: 3,
      name: "Maria Oliveira",
      role: "UI/UX Designer",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "A qualidade do conteúdo é excepcional. Aprendi muito sobre acessibilidade e boas práticas.",
    },
  ];
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que os alunos dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Mais de 1000 desenvolvedores já transformaram suas carreiras
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((depoimento) => (
            <Card key={depoimento.id} className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-muted-foreground mb-4">
                  {depoimento.content}
                </p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage
                      src={depoimento.avatar || "/placeholder.svg"}
                    />
                    <AvatarFallback>{depoimento.name}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{depoimento.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {depoimento.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
