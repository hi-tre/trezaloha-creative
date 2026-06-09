// Central site config — contact details, socials, and the two form handlers.
// ───────────────────────────────────────────────────────────────
// FORMS — two separate handlers, each its own job:
//
// 1) CONTACT FORM → Formspree (catches a message and emails it to you).
//      a. Sign up at https://formspree.io with hi@trezalohacreative.com
//      b. Create a form; copy its ID (looks like "xayzwabc").
//      c. Paste that ID into CONTACT_FORM_ID below.
//
// 2) LOOK BOOK SIGNUP → Buttondown (a subscriber list you send each
//    quarterly issue from, with unsubscribes handled for you).
//      a. Sign up at https://buttondown.com, pick a username, confirm your email.
//      b. Paste that username into LOOKBOOK_BUTTONDOWN_USER below.
//
// Until each value is filled in, that form shows a friendly "not connected yet"
// message instead of submitting. Spam is blocked by the provider's own filtering
// plus a hidden honeypot field on each form.
// ───────────────────────────────────────────────────────────────

// 1) Contact form (Formspree)
export const CONTACT_FORM_ID = 'xbdelzlq';
export const contactFormAction = `https://formspree.io/f/${CONTACT_FORM_ID}`;

// 2) Look book signup (Buttondown)
export const LOOKBOOK_BUTTONDOWN_USER = 'trezalohacreative';
export const lookbookAction = `https://buttondown.com/api/emails/embed-subscribe/${LOOKBOOK_BUTTONDOWN_USER}`;
export const lookbookConfirmUrl = `https://buttondown.com/${LOOKBOOK_BUTTONDOWN_USER}`;

export const contact = {
  email: 'hi@trezalohacreative.com',
  location: "Ko'olau Mountain Range, O'ahu, HI",
  locationHref: "https://www.google.com/maps/place/Ko'olau+Mountains,+Hawaii",
};

export const socials = [
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/trezamora' },
  { label: 'Instagram', href: 'https://www.instagram.com/jackofalltre_/' },
  { label: 'YouTube',   href: 'https://www.youtube.com/@jackofalltre' },
  { label: 'GitHub',    href: 'https://github.com/trezamora' },
];

export const menuLinks = [
  { label: 'About',    href: '/about' },
  { label: 'Projects', href: '/case-studies' },
  { label: 'Services', href: '/services' },
  { label: 'Field Notes', href: '/field-notes' },
  { label: 'Contact',  href: '/contact-us' },
];

export const serviceLinks = [
  'Visual Identity & Branding',
  'UX/UI & Web',
  'Digital & Print',
  'Editorial & Environmental',
  'Art & Commissions',
];
