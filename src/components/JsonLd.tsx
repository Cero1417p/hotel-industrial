import React from 'react';

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Component to inject JSON-LD structured data into the page
 * for better SEO and rich snippets in search results
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
