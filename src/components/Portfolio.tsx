import { motion } from "motion/react";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function Portfolio() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("portfolio.case1.title"),
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxsJTIwY2VudGVyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTc4OTAyODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: t("portfolio.case2.title"),
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY3VzdG9tZXIlMjBzZXJ2aWNlfGVufDF8fHx8MTc1Nzg5MDI4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: t("portfolio.case3.title"),
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm0lMjBzeXN0ZW0lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTc4OTAyODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t("portfolio.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <CardContent className="p-6">
                  <div className="h-2 w-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4"></div>

                  <h3 className="text-xl font-semibold text-slate-800 mb-4 leading-relaxed">
                    {project.title}
                  </h3>

                  <div className="mt-4">
                    <Button
                      variant="ghost"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 font-medium"
                    >
                      {t("portfolio.viewMore")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
