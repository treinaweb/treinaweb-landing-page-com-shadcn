import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escolha seu plano
          </h2>
          <p className="text-xl text-muted-foreground">
            Comece gratuitamente ou acelere seu aprendizado com nosso plano
            premium
          </p>
        </div>

        <Tabs defaultValue="monthly" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="monthly">Mensal</TabsTrigger>
            <TabsTrigger value="yearly">Anual</TabsTrigger>
          </TabsList>

          <TabsContent value="monthly">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Gratuito</CardTitle>
                  <CardDescription>Perfeito para começar</CardDescription>
                  <div className="text-4xl font-bold">R$ 0</div>
                  <div className="text-muted-foreground">para sempre</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />5
                      aulas introdutórias
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Componentes básicos
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Comunidade no Discord
                    </li>
                  </ul>
                  <Button className="w-full bg-transparent" variant="outline">
                    Começar Grátis
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Mais Popular
                </Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Premium</CardTitle>
                  <CardDescription>Acesso completo ao curso</CardDescription>
                  <div className="text-4xl font-bold">R$ 97</div>
                  <div className="text-muted-foreground">por mês</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Curso completo (20h)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Projetos práticos
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Suporte direto
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Certificado de conclusão
                    </li>
                  </ul>
                  <Button className="w-full">Começar Premium</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="yearly">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Gratuito</CardTitle>
                  <CardDescription>Perfeito para começar</CardDescription>
                  <div className="text-4xl font-bold">R$ 0</div>
                  <div className="text-muted-foreground">para sempre</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />5
                      aulas introdutórias
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Componentes básicos
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Comunidade no Discord
                    </li>
                  </ul>
                  <Button className="w-full bg-transparent" variant="outline">
                    Começar Grátis
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Economize 30%
                </Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Premium Anual</CardTitle>
                  <CardDescription>Melhor valor</CardDescription>
                  <div className="text-4xl font-bold">R$ 67</div>
                  <div className="text-muted-foreground">
                    por mês (cobrado anualmente)
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Curso completo (20h)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Projetos práticos
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Suporte direto
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Certificado de conclusão
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Atualizações vitalícias
                    </li>
                  </ul>
                  <Button className="w-full">Começar Premium Anual</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
