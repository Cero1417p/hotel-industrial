"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split("/").filter((path) => path);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: "Inicio", href: "/" }
    ];

    let currentPath = "";
    paths.forEach((path) => {
      currentPath += `/${path}`;
      
      // Translate path names to Spanish
      const labelMap: Record<string, string> = {
        "habitaciones": "Habitaciones",
        "nosotros": "Nosotros",
        "contactanos": "Contáctanos",
      };

      breadcrumbs.push({
        label: labelMap[path] || path,
        href: currentPath,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on homepage
  if (pathname === "/") return null;

  // Generate JSON-LD for breadcrumbs
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://hostalindustrial.com${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="bg-gray-50 dark:bg-gray-900 py-3 px-5">
        <ol className="max-w-7xl mx-auto flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="w-3 h-3 mx-2 text-gray-400"
                />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-700 dark:text-gray-300 font-medium flex items-center">
                  {index === 0 && <FontAwesomeIcon icon={faHome} className="w-4 h-4 mr-1" />}
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-primary hover:text-primary-hover transition-colors flex items-center"
                >
                  {index === 0 && <FontAwesomeIcon icon={faHome} className="w-4 h-4 mr-1" />}
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
