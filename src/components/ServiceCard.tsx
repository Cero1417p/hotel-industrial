"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import type { Service } from "@/data/services-data";
import { getCategoryInfo } from "@/data/services-data";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const categoryInfo = getCategoryInfo(service.category);
  
  if (!categoryInfo) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 h-full flex flex-col group hover:-translate-y-1"
    >
      {/* Header with icon */}
      <div className="flex items-start gap-3 mb-3">
        <div
          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${categoryInfo.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
        >
          <FontAwesomeIcon
            icon={categoryInfo.icon}
            className="text-white text-lg"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 dark:text-white text-base leading-tight mb-1">
            {service.name}
          </h3>
          {service.specialty && (
            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              {service.specialty}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-2">
        {service.address && (
          <div className="flex items-start gap-2 text-sm">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-gray-400 mt-0.5 flex-shrink-0"
            />
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(service.address + ", Cajamarca, Peru")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              {service.address}
            </a>
          </div>
        )}

        {service.hours && (
          <div className="flex items-center gap-2 text-sm">
            <FontAwesomeIcon
              icon={faClock}
              className="text-gray-400 flex-shrink-0"
            />
            <span className="text-gray-600 dark:text-gray-300">
              {service.hours}
            </span>
          </div>
        )}

        {service.phone && (
          <div className="flex items-center gap-2 text-sm">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-gray-400 flex-shrink-0"
            />
            <a
              href={`tel:${service.phone}`}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              {service.phone}
            </a>
          </div>
        )}

        {service.description && (
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pt-2 border-t border-gray-100 dark:border-gray-700">
            {service.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
