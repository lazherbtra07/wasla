import { ArrowRight, Cog, Palette, Search, TrendingUp } from "lucide-react";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export function Process() {
  const { t, language } = useLanguage();

  const processSteps = [
    {
      titleKey: "process.discovery.title",
      subtitleKey: "process.discovery.subtitle",
      descKey: "process.discovery.desc",
      icon: Search,
      color: "bg-primary/5 border-primary/20",
      iconColor: "text-primary",
      number: "01",
    },
    {
      titleKey: "process.design.title",
      subtitleKey: "process.design.subtitle",
      descKey: "process.design.desc",
      icon: Palette,
      color: "bg-secondary/5 border-secondary/20",
      iconColor: "text-secondary",
      number: "02",
    },
    {
      titleKey: "process.implementation.title",
      subtitleKey: "process.implementation.subtitle",
      descKey: "process.implementation.desc",
      icon: Cog,
      color: "bg-accent/5 border-accent/20",
      iconColor: "text-accent",
      number: "03",
    },
    {
      titleKey: "process.optimization.title",
      subtitleKey: "process.optimization.subtitle",
      descKey: "process.optimization.desc",
      icon: TrendingUp,
      color: "bg-primary/10 border-primary/30",
      iconColor: "text-primary",
      number: "04",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("process.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("process.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                <Card
                  className={`h-full border-2 ${step.color} hover:shadow-lg transition-shadow duration-300`}
                >
                  {/* Number Badge */}
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-card border-2 border-border text-foreground font-bold text-sm px-3 py-1">
                      {step.number}
                    </Badge>
                  </div>

                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className="mb-6">
                      <div
                        className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center mb-4`}
                      >
                        <IconComponent
                          className={`w-8 h-8 ${step.iconColor}`}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground">
                        {t(step.titleKey)}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground">
                        {t(step.subtitleKey)}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(step.descKey)}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="bg-card rounded-full p-2 shadow-md border border-border">
                      <ArrowRight
                        className={`w-5 h-5 text-muted-foreground ${
                          language === "AR" ? "rotate-180" : ""
                        }`}
                        style={{
                          transform:
                            language === "AR"
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
