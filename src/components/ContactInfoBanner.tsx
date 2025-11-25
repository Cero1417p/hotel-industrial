"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

export default function ContactInfoBanner() {
  const contactItems = [
    {
      icon: faPhone,
      title: "Teléfono",
      content: `+51 ${siteConfig.contact.phone}`,
      href: `tel:+51${siteConfig.contact.phone}`,
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: faMapMarkerAlt,
      title: "Ubicación",
      content: siteConfig.contact.address,
      href: "https://maps.google.com/?q=Av.+Industrial+755+Cajamarca+Peru",
      color: "from-red-500 to-red-600",
    },
    {
      icon: faEnvelope,
      title: "Email",
      content: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      color: "from-green-500 to-green-600",
    },
    {
      icon: faClock,
      title: "Horario",
      content: "24/7 Disponible",
      href: null,
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Estamos aquí para ti
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Contáctanos en cualquier momento, estamos disponibles 24/7
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.icon === faMapMarkerAlt ? "_blank" : undefined}
                  rel={item.icon === faMapMarkerAlt ? "noopener noreferrer" : undefined}
                  className="block h-full"
                >
                  <ContactCard item={item} />
                </a>
              ) : (
                <div className="h-full">
                  <ContactCard item={item} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ContactCardProps {
  item: {
    icon: IconDefinition;
    title: string;
    content: string;
    color: string;
  };
}

function ContactCard({ item }: ContactCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full flex flex-col items-center text-center group hover:-translate-y-2">
      <div
        className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <FontAwesomeIcon
          icon={item.icon}
          className="text-white text-2xl"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
        {item.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        {item.content}
      </p>
    </div>
  );
}
