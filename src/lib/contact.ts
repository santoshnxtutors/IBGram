/**
 * Single source of truth for IBGram business contact details.
 *
 * Update values here and every public surface (contact page, schema.org JSON-LD,
 * city pages, WhatsApp buttons, footers, generated pages, etc.) reflects the
 * change.
 */
export const CONTACT = {
  email: "ibgram24@gmail.com",

  // Local Indian format (display)
  phoneDisplay: "+91 7439 368 115",
  // E.164 format (tel: links)
  phoneTel: "+917439368115",
  // Plain digits for wa.me URLs
  whatsappDigits: "917439368115",

  // WhatsApp click-to-chat with a default greeting (URL-encoded)
  whatsappUrl: "https://wa.me/917439368115?text=Hi%20IBGram%20team%2C%20I%27d%20like%20to%20know%20more%20about%20your%20IB%20%2F%20IGCSE%20tutoring.",

  // Address
  addressLine1: "Ajay Vatsyayan classes, behind Big Basket",
  addressLine2: "Sarswati Kunj II, Wazirabad, Sector 52",
  addressCity: "Gurugram",
  addressState: "Haryana",
  addressPostal: "122003",
  addressCountry: "IN",
  addressFull:
    "Ajay Vatsyayan classes, behind Big Basket, Sarswati Kunj II, Wazirabad, Sector 52, Gurugram, Haryana 122003",

  // Google Maps short link
  mapUrl: "https://maps.app.goo.gl/QG4hQQHKx84zMHnH8",
} as const;
