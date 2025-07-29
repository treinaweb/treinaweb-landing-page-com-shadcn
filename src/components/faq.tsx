import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre o curso
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>O que é shadcn/ui?</AccordionTrigger>
            <AccordionContent>
              O shadcn/ui é uma colaçào de componentes reutilizáveis construídos
              com Radix UI e Tailwind. É uma biblioteca que você pode copiar e
              colar em seus projetos, oferecendo componentes acessíveis e
              customizáveis.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Preciso ter experiência prévia?</AccordionTrigger>
            <AccordionContent>
              É recomendado ter conhecimentos básicos de React e TypeScript. Se
              você já trabalha com React, conseguirá acompanhar o curso sem
              problemas. Também oferecemos uma seção de pré-requisitos para quem
              precisa se atualizar.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              O curso inclui projetos práticos?
            </AccordionTrigger>
            <AccordionContent>
              Sim! O curso inclui 3 projetos completos: um dashboard
              administrativo, uma loja e-commerce e uma landing page moderna.
              Cada projeto é construído do zero, aplicando os conceitos
              aprendidos.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
