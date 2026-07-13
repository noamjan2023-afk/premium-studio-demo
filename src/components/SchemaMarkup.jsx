import React from 'react';

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": "https://www.google.com/maps?cid=17897258428581633954", 
    "name": "אינסטלטור אלכס ידי זהב 24/7",
    "image": "https://yourwebsite.co.il/images/logo.png",
    "url": "https://yourwebsite.co.il",
    "telephone": "+972-52-641-0042",
    "priceRange": "$$",
    "description": "שירותי אינסטלציה מקצועיים ומהירים בראשון לציון והסביבה. זמינות 24/7 לכל סוגי עבודות האינסטלציה ומקרי חירום.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rishon LeZion",
      "addressRegion": "Center District",
      "addressCountry": "IL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.951997,
      "longitude": 34.7879026
    },
    "hasMap": "https://www.google.com/maps/place/24%2F7+%D0%A1%D0%B0%D0%BD%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA+%D7%90%D7%99%D7%A0%D7%A1%D7%98%D7%9C%D7%98%D7%95%D7%A8+%D7%90%D7%9C%D7%9B%D7%A1+%D7%99%D7%93%D7%99+%D7%96%D7%94%D7%91%E2%80%AD/@31.951997,34.7879026,12z/data=!3m1!4b1!4m6!3m5!1s0xa92f6e04ec6f161d:0xf85fe256f8eedfa2!8m2!3d31.951997!4d34.7879026!16s%2Fg%2F11z0wz8mqs",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Rishon LeZion"
      },
      {
        "@type": "City",
        "name": "Holon"
      },
      {
        "@type": "City",
        "name": "Bat Yam"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
