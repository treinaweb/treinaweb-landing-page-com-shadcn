import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function Newsletter() {
  return (
    <section
      id="newsletter"
      className="py-20 px-4 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Fique por dentro das novidades
        </h2>
        <p className="text-sm mb-8 opacity-90">
          Receba dicas, tutoriais e atualizações sobre o shadcn/ui diretamente
          no seu email.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="flex-1">
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Seu melhor email"
              className="bg-background text-foreground"
            />
          </div>
          <Button variant="secondary" className="whitespace-nowrap">
            Inscrever-se
          </Button>
        </div>
        <p className="text-sm mt-4 opacity-75">
          Sem spam. Cancele a qualquer momento.
        </p>
      </div>
    </section>
  );
}
