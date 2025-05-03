import { useTranslations } from "next-intl";

export const getMenusOptions = (content: ReturnType<typeof useTranslations>) => ({
  MAIN: [
    { label: content.raw("menus.main.home"), href: "#home" },
    { label: content.raw("menus.main.about"), href: "#about" },
    { label: content.raw("menus.main.products"), href: "#products" },
    { label: content.raw("menus.main.contact"), href: "#contact" },
  ],
  LEGAL: [
    { label: content.raw("menus.legal.terms"), href: "#terms" },
    { label: content.raw("menus.legal.accessibility"), href: "#accessibility" },
    { label: content.raw("menus.legal.privacyPolicy"), href: "#privacy" },
  ],
  CONTACT: [
    { label: content.raw("menus.contact.email"), href: "mailto:info@example.com" },
    { label: content.raw("menus.contact.phone"), href: "tel:+1234567890" },
    { label: content.raw("menus.contact.location"), href: "#location" },
  ],
});
