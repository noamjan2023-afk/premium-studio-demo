import React from 'react';

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": "https://alex-plumbing-il.vercel.app/#plumber",
    "name": "אלכס ידי זהב - אינסטלטור חירום 24/7",
    "image": "https://alex-plumbing-il.vercel.app/images/logo.png", // נתיב הלוגו שלך באתר
    "url": "https://alex-plumbing-il.vercel.app",
    "telephone": "+972-52-641-0042",
    "priceRange": "₪₪",
    "description": "אלכס ידי זהב - אינסטלטור מומחה לפתיחת סתימות מורכבות ומקרי חירום 24/7 בראשון לציון והסביבה. הגעה אקספרס על דו-גלגלי ללא עיכובי פקקים וחניה. שירות מקצועי ואדיב בעברית וברוסית.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rishon LeZion",
      "addressRegion": "Center District",
      "addressCountry": "IL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.964250, // קואורדינטות מדויקות לרחוב הכרמל 10
      "longitude": 34.804112
    },

    // קישור גוגל מפס הרשמי שנתת (מקוצר ומומר לפורמט ישיר)
    "hasMap": "https://maps.app.goo.gl/Acq4KCxUU98FR9NHA",

    // דירוג אמינות המבוסס על הביקורות האמיתיות שלו ברשת
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "73",
      "bestRating": "5",
      "worstRating": "1"
    },

    // חיבור ישיר לוואטסאפ שלו לתיאום מהיר
    "sameAs": [
      "https://wa.me/972526410042"
    ],

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
      },
      {
        "@type": "City",
        "name": "Ness Ziona"
      },
      {
        "@type": "City",
        "name": "Rehovot"
      }
    ],

    // קטלוג השירותים המורחב והמדוייק של אלכס
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "שירותי אינסטלציה ועבודות סניטריה",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "פתיחת סתימות ביוב ומים מורכבות",
            "description": "פתיחת כל סוגי הסתימות באסלה, בכיור, באמבטיה ובקווי ביוב ראשיים באמצעות ציוד מקצועי."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "אינסטלטור חירום 24 שעות",
            "description": "זמינות מלאה 24/7 לפתרון בעיות דחופות, פיצוצי צנרת, הצפות ופתיחת סתימות גם בשבתות וחגים."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "החלפה והתקנת ברזים וכלים סניטריים",
            "description": "התקנה ותיקון של ברזים, כיורים, אסלות, ניאגרות (כולל ניאגרה סמויה) ואביזרי אמבטיה."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "תיקון נזילות מים וסניטריה",
            "description": "איתור מקור הנזילה, תיקון צנרת פגומה ומניעת נזקי רטיבות בבית ובחצר."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "עבודות הנדימן ותיקונים קלים בבית",
            "description": "הרכבת רהיטים, תליית טלוויזיות, מדפים, וילונות וגופי תאורה באמינות ומקצועיות."
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;