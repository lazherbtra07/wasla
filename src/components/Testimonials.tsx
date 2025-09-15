import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Sarah Johnson",
      contentKey: "testimonials.sarah.content",
      consultingTypeKey: "testimonials.sarah.type",
      image:
        "https://images.unsplash.com/photo-1754298949882-216a1c92dbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU3ODM5MDU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Michael Chen",
      contentKey: "testimonials.michael.content",
      consultingTypeKey: "testimonials.michael.type",
      image:
        "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1Nzg3MDExOHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Emily Rodriguez",
      contentKey: "testimonials.emily.content",
      consultingTypeKey: "testimonials.emily.type",
      image:
        "https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTc4OTMwNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5 relative overflow-hidden">
      {/* Background Animations */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-2xl"
      />

      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1.3, 1, 1.3],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-2xl"
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
            {t("testimonials.title")}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t("testimonials.subtitle")}
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: `-${currentIndex * 100}%`,
              }}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.8,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="mx-4 border-0 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col lg:flex-row">
                        {/* Image Section */}
                        <div className="lg:w-1/2 relative">
                          <ImageWithFallback
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-64 lg:h-96 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                          <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-2xl font-bold mb-1">
                              {testimonial.name}
                            </h3>
                            <p className="text-white/90 font-medium">
                              {t(testimonial.consultingTypeKey)}
                            </p>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                          <div className="relative">
                            {/* Quote marks */}
                            <div className="text-6xl text-accent/20 font-serif absolute -top-4 -left-2">
                              "
                            </div>
                            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 relative z-10">
                              {t(testimonial.contentKey)}
                            </p>
                            <div className="text-6xl text-accent/20 font-serif absolute -bottom-8 -right-2">
                              "
                            </div>
                          </div>

                          {/* Consulting Type Badge */}
                          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-secondary to-accent rounded-full text-white font-medium text-sm w-fit">
                            {t(testimonial.consultingTypeKey)}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-primary scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
