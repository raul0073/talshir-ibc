This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
talshir-ibc
├─ components.json
├─ eslint.config.mjs
├─ messages
│  ├─ ar.json
│  ├─ en.json
│  ├─ es.json
│  └─ he.json
├─ next.config.mjs
├─ next.config.ts
├─ package.json
├─ pnpm-lock.yaml
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  └─ products
│  │     ├─ nadal-noBG.png
│  │     ├─ nadal_action1.jpg
│  │     ├─ slicer.jpg
│  │     └─ spacer-noBG.png
│  ├─ models
│  │  ├─ divi-15-18.glb
│  │  └─ untitled.glb
│  └─ window.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ api
│  │  │  └─ locale
│  │  │     └─ route.ts
│  │  ├─ assets
│  │  ├─ favicon.ico
│  │  └─ [locale]
│  │     ├─ (main)
│  │     │  ├─ layout.tsx
│  │     │  ├─ page.tsx
│  │     │  └─ [product]
│  │     │     ├─ components
│  │     │     │  └─ ProductComp.tsx
│  │     │     └─ page.tsx
│  │     ├─ globals.scss
│  │     ├─ layout.tsx
│  │     └─ not-found.tsx
│  ├─ components
│  │  ├─ Section
│  │  │  └─ SectionWithLocale.tsx
│  │  └─ ui
│  │     ├─ accordion.tsx
│  │     ├─ background-boxes.tsx
│  │     ├─ button-arrow.tsx
│  │     ├─ button.tsx
│  │     ├─ form.tsx
│  │     ├─ label.tsx
│  │     ├─ root
│  │     │  ├─ 3D
│  │     │  │  └─ ModelComp.tsx
│  │     │  ├─ About
│  │     │  │  ├─ AboutComp.tsx
│  │     │  │  ├─ CoopsCard.tsx
│  │     │  │  └─ styles
│  │     │  │     └─ about.scss
│  │     │  ├─ Contact
│  │     │  │  ├─ ContactForm.tsx
│  │     │  │  └─ ContactUsComp.tsx
│  │     │  ├─ Coops
│  │     │  │  └─ CoopsComp.tsx
│  │     │  ├─ Features
│  │     │  │  ├─ components
│  │     │  │  │  └─ FeatureCard.tsx
│  │     │  │  └─ FeaturesComp.tsx
│  │     │  ├─ Footer
│  │     │  │  ├─ Footer.tsx
│  │     │  │  ├─ legal
│  │     │  │  │  └─ policies.ts
│  │     │  │  └─ Modal.tsx
│  │     │  ├─ Header
│  │     │  │  └─ SectionHeader.tsx
│  │     │  ├─ Hero
│  │     │  │  ├─ BoxesBG.tsx
│  │     │  │  ├─ DotBg.tsx
│  │     │  │  ├─ HeroComp.tsx
│  │     │  │  ├─ HeroContent.tsx
│  │     │  │  └─ Tag.tsx
│  │     │  ├─ Logo
│  │     │  │  └─ LogoComp.tsx
│  │     │  ├─ Navbar
│  │     │  │  ├─ data
│  │     │  │  │  └─ menus.ts
│  │     │  │  ├─ HamburgerMenuBtn.tsx
│  │     │  │  ├─ langSwitcher.tsx
│  │     │  │  ├─ MobileNavigation.tsx
│  │     │  │  ├─ Navbar.tsx
│  │     │  │  └─ NavigationLinks.tsx
│  │     │  ├─ Products
│  │     │  │  ├─ ProductAccordion.tsx
│  │     │  │  └─ ProductsComp.tsx
│  │     │  └─ Stats
│  │     │     └─ StatsComp.tsx
│  │     ├─ select.tsx
│  │     ├─ separator.tsx
│  │     ├─ shadow-button.tsx
│  │     └─ skeleton.tsx
│  ├─ i18n
│  │  ├─ request.ts
│  │  └─ routing.ts
│  ├─ lib
│  │  └─ utils.ts
│  └─ middleware.ts
├─ tailwind.config.ts
├─ tsconfig.json
└─ types
   └─ products.tsx

```