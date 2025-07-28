"use client";

import { Code2, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Code2 className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">Shadcn/ui Course</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#recursos"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Recursos
          </Link>
          <Link
            href="#precos"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Preços
          </Link>
          <Link
            href="#contato"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contato
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            FAQ
          </Link>
          <Link href="/login">
            <Button variant="outline" size="sm">
              Login
            </Button>
          </Link>
          <Button size="sm">Começar agora</Button>
        </nav>
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4 text-center">
            <Link
              href="#recursos"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Recursos
            </Link>
            <Link
              href="#precos"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Preços
            </Link>
            <Link
              href="#contato"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>
            <Link
              href="#faq"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-2 border-t space-x-2 text-center">
              <Link href="/login">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block mx-auto"
                >
                  Login
                </Button>
              </Link>
              <Button
                size="sm"
                className="block mx-auto"
                onClick={() => setMobileMenuOpen(false)}
              >
                Começar agora
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
