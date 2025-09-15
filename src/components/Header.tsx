import { Globe, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="font-bold text-white">BC</span>
            </div>
            <span className="font-bold text-xl text-primary">
              {t("header.logo")}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { key: "header.home", href: "#home" },
              { key: "header.services", href: "#services" },
              { key: "header.products", href: "#products" },
              { key: "header.about", href: "#about" },
              { key: "header.contact", href: "#contact" },
            ].map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {t(item.key)}
                <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* CTA and Language Switch */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Globe size={16} />
              <span>{language}</span>
            </button>
            <Button className="bg-accent hover:bg-accent/90">
              {t("header.quote")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-4">
              {[
                { key: "header.home", href: "#home" },
                { key: "header.services", href: "#services" },
                { key: "header.products", href: "#products" },
                { key: "header.about", href: "#about" },
                { key: "header.contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Globe size={16} />
                  <span>{language}</span>
                </button>
                <Button className="bg-accent hover:bg-accent/90">
                  {t("header.quote")}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
