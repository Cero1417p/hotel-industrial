"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { serviceCategories, getServicesByCategory } from "@/data/services-data";
import type { ServiceCategory } from "@/data/services-data";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("transport");
  const services = getServicesByCategory(activeCategory);
  const activeCategoryInfo = serviceCategories.find((cat) => cat.id === activeCategory);

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {serviceCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-6 py-3 rounded-full font-semibold text-sm md:text-base
                transition-all duration-300 flex items-center gap-2
                ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg scale-105`
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }
              `}
            >
              <FontAwesomeIcon icon={category.icon} />
              <span>{category.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        {/* Empty state */}
        {services.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No hay servicios disponibles en esta categoría
            </p>
          </motion.div>
        )}

        {/* Category Description */}
        {activeCategoryInfo && (
          <motion.div
            key={`desc-${activeCategory}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {activeCategory === "transport" && "Servicios de taxi confiables y seguros para movilizarte por Cajamarca"}
              {activeCategory === "restaurant" && "Los mejores restaurantes cerca del hostal para disfrutar de la gastronomía local"}
              {activeCategory === "tour" && "Agencias de tours para explorar los atractivos turísticos de Cajamarca"}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
