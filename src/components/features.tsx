import { CheckCircle, Code2, Palette, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Features() {
    return (
           <section id="features" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher nosso curso?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Aprenda shadcn/ui da forma mais eficiente com nossa metodologia
              comprovada
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Projetos Práticos</CardTitle>
                <CardDescription>
                  Construa aplicações reais enquanto aprende cada componente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle  className="h-4 w-4 text-green-500 mr-2"/>
                    Dashboard Administrativo
                  </li>
                   <li className="flex items-center">
                    <CheckCircle  className="h-4 w-4 text-green-500 mr-2"/>
                    E-commerce Completo
                  </li>
                   <li className="flex items-center">
                    <CheckCircle  className="h-4 w-4 text-green-500 mr-2"/>
                    Landing Pages
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Design System</CardTitle>
                <CardDescription>
                  Aprenda a criar e manter um design sustem consistente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle  className="h-4 w-4 text-green-500 mr-2"/>
                    Tokens de design
                  </li>
                   <li className="flex items-center">
                    <CheckCircle  className="h-4 w-4 text-green-500 mr-2"/>
                    Temas personalizados
                  </li>
                   <li className="flex items-center">
                    <CheckCircle  className="h-4 w-4 text-green-500 mr-2"/>
                    Modo escuro/claro
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Performance</CardTitle>
                <CardDescription>
                  Otimize suas aplicações para máxima performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle  className="h-4 w-4 text-green-500 mr-2"/>
                    Tree shaking
                  </li>
                   <li className="flex items-center">
                    <CheckCircle  className="h-4 w-4 text-green-500 mr-2"/>
                    Lazy loading
                  </li>
                   <li className="flex items-center">
                    <CheckCircle  className="h-4 w-4 text-green-500 mr-2"/>
                    Bundle optimization
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}