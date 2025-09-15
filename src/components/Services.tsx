import {
  ArrowRight,
  BarChart,
  Briefcase,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function Services() {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Lightbulb,
      titleKey: "services.strategy.title",
      descKey: "services.strategy.desc",
      image:
        "https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzU3ODcyNTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-primary to-blue-600",
    },
    {
      icon: TrendingUp,
      titleKey: "services.market.title",
      descKey: "services.market.desc",
      image:
        "https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc1Nzc4NDMwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-secondary to-green-600",
    },
    {
      icon: Users,
      titleKey: "services.team.title",
      descKey: "services.team.desc",
      image:
        "https://images.unsplash.com/photo-1670851050245-d861fd433d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTc4NDk3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-accent to-red-600",
    },
    {
      icon: Target,
      titleKey: "services.goal.title",
      descKey: "services.goal.desc",
      image:
        "https://images.unsplash.com/photo-1601058660898-82c168404c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwZW50cmVwcmVuZXVyJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NTc4OTAyODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: Briefcase,
      titleKey: "services.legal.title",
      descKey: "services.legal.desc",
      image:
        "https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGlubm92YXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1Nzg5MDI4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-indigo-600 to-purple-600",
    },
    {
      icon: BarChart,
      titleKey: "services.financial.title",
      descKey: "services.financial.desc",
      image:
        "https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc1Nzg5MDI4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-emerald-600 to-teal-600",
    },
  ];

  return (
    <section
      className="py-20 relative overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.85), rgba(5, 150, 105, 0.85)), url('https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG9mZmljZSUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU3ODkzMDMyfDA&ixlib=rb-4.1.0&q=80&w=1080')`,
      }}
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          x: [100, -100, 100],
          y: [50, -50, 50],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("services.title")}
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t("services.subtitle")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group bg-white/95 backdrop-blur-sm">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={t(service.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}
                    whileHover={{ opacity: 0.9 }}
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {t(service.titleKey)}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t(service.descKey)}
                  </p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      variant="ghost"
                      className="text-primary hover:bg-primary/10 p-0"
                    >
                      {t("services.learn")}
                      <ArrowRight
                        className={`${language === "AR" ? "mr-2" : "ml-2"}`}
                        size={16}
                        style={{
                          transform:
                            language === "AR"
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </Button>
                  </motion.div>
                </CardContent>

                {/* Animated Bottom Border */}
                <motion.div
                  className={`h-1 bg-gradient-to-r ${service.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3"
            >
              {t("services.view")}
              <ArrowRight
                className={`${language === "AR" ? "mr-2" : "ml-2"}`}
                size={20}
                style={{
                  transform:
                    language === "AR" ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
