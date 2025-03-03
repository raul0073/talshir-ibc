import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export type LocaleOptions = "en" | "es" | "he" | "ar"


export const routing = defineRouting({
  locales: ["en", "he", "es", "ar"],
  
  defaultLocale: "en",
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);