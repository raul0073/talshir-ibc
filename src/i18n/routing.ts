import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export type LocaleOptions = "en" | "he" 


export const routing = defineRouting({
  locales: ["en", "he"],
  defaultLocale: "he",
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);