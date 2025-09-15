import { ArrowRight, Tag } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function Blog() {
  const { t, language } = useLanguage();
  const articles = [
    {
      title: t("blog.post1.title"),
      excerpt: "تعاون استراتيجي جديد مع مزود اتصالات – مارس 2025.",
      image:
        "https://images.unsplash.com/photo-1601058660898-82c168404c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwZW50cmVwcmVuZXVyJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NTc4OTAyODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      author: "وصلة",
      date: t("blog.post1.date"),
      readTime: "5 دقائق قراءة",
      category: "أخبار",
      featured: true,
    },
    {
      title: t("blog.post2.title"),
      excerpt: "مشاركتنا في معرض التقنية – أبريل 2025.",
      image:
        "https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc1Nzc4NDMwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      author: "وصلة",
      date: t("blog.post2.date"),
      readTime: "4 دقائق قراءة",
      category: "أحداث",
    },
    {
      title: t("blog.post3.title"),
      excerpt: "ميزات جديدة في لوحات القياس – مايو 2025.",
      image:
        "https://images.unsplash.com/photo-1670851050245-d861fd433d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTc4NDk3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      author: "وصلة",
      date: t("blog.post3.date"),
      readTime: "6 دقائق قراءة",
      category: "تحديثات",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Animations */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 40, -20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-3xl"
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("blog.title")}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t("blog.subtitle")}
          </motion.p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 lg:h-full overflow-hidden">
                <ImageWithFallback
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"
                  whileHover={{ opacity: 0.8 }}
                />

                {/* Featured Badge */}
                <motion.div
                  className="absolute top-4 left-4 bg-accent text-white px-4 py-2 rounded-full font-medium"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  Featured Article
                </motion.div>

                {/* Category */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary">
                  {articles[0].category}
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                  {articles[0].title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {articles[0].excerpt}
                </p>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    {t("blog.readMore")}
                    <ArrowRight
                      className={`${language === "AR" ? "mr-2" : "ml-2"}`}
                      size={16}
                      style={{
                        transform:
                          language === "AR" ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </Button>
                </motion.div>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* Regular Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {articles.slice(1).map((article, index) => (
            <motion.div
              key={index + 1}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"
                    whileHover={{ opacity: 0.8 }}
                  />

                  {/* Category */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary">
                    <Tag size={12} className="inline mr-1" />
                    {article.category}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-end">
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button
                        variant="ghost"
                        className="text-primary hover:text-secondary hover:bg-secondary/10 p-0"
                      >
                        {t("blog.readMore")}
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
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3"
            >
              {t("blog.readMore")}
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
