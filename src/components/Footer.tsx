import {
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { nameKey: "header.home", href: "#home" },
    { nameKey: "header.services", href: "#services" },
    { nameKey: "header.products", href: "#products" },
    { nameKey: "header.about", href: "#about" },
    { nameKey: "header.contact", href: "#contact" },
  ];

  const services = [
    "Business Strategy",
    "Market Analysis",
    "Team Building",
    "Goal Setting",
    "Legal & Compliance",
    "Financial Planning",
  ];

  const socialMedia = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      {/* Background Animations */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"
      />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-accent to-white rounded-lg flex items-center justify-center">
                <span className="font-bold text-primary">BC</span>
              </div>
              <span className="font-bold text-2xl text-white">
                {t("header.logo")}
              </span>
            </div>

            <p className="text-white/80 leading-relaxed mb-6">
              {t("footer.desc")}
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">
              {t("footer.quick")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 relative group"
                  >
                    {t(link.nameKey)}
                    <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">
              {t("services.title")}
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href="#services"
                    className="text-white/80 hover:text-white transition-colors duration-300 relative group"
                  >
                    {service}
                    <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">
              {t("footer.contact.title")}
            </h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-3 text-white/80"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin size={18} className="text-accent" />
                <div>
                  <p>{t("footer.contact.address")}</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 text-white/80"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Phone size={18} className="text-accent" />
                <p>{t("footer.contact.phone")}</p>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 text-white/80"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Mail size={18} className="text-accent" />
                <p>{t("footer.contact.email")}</p>
              </motion.div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-3">
                Stay Updated
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-r-lg transition-colors duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/20 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white/80 text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2024 BusinessConsult. All rights reserved.</p>
              <div className="flex items-center justify-center md:justify-start space-x-6 mt-2">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={scrollToTop}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20"
                size="sm"
              >
                <ArrowUp size={16} className="mr-2" />
                Back to Top
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-20 w-16 h-16 bg-white/5 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 left-20 w-20 h-20 bg-white/5 rounded-full blur-xl"
      />
    </footer>
  );
}
