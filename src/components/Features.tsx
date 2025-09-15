import { Code, Globe, Palette, Share2, Users, Zap } from "lucide-react";
import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Palette,
    title: "Design Systems",
    description:
      "Create consistent designs with reusable components and styles that scale across your entire product.",
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description:
      "Work together in real-time with comments, cursor chat, and live editing capabilities.",
  },
  {
    icon: Zap,
    title: "Prototyping",
    description:
      "Build interactive prototypes to test ideas and validate user flows before development.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description:
      "Share designs instantly with stakeholders and collect feedback in one centralized place.",
  },
  {
    icon: Code,
    title: "Developer Handoff",
    description:
      "Generate clean code snippets and specs that developers can use to build your designs.",
  },
  {
    icon: Globe,
    title: "Cross-platform",
    description:
      "Access your designs anywhere with our web app, desktop app, or mobile companion.",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Everything you need to design</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From ideation to implementation, Figma has all the tools your team
            needs to create amazing products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-none bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors"
            >
              <CardContent className="p-6">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl mb-6">Design with purpose</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Create beautiful, functional designs that solve real problems.
              With Figma's powerful design tools and collaborative features, you
              can bring your ideas to life faster than ever.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Vector editing tools</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Advanced typography</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Auto-layout system</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1705909773420-8d7af2a343f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU3ODMxMTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern workspace"
              className="rounded-2xl w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
