# MOPRED Website

This project contains the complete source code for the [MOPRED website](https://mopred.uni-frankfurt.de/). 
The project is built with the [Astro framework](https://astro.build/), which incorporates the Tailwind and MDX integration.

## Documentation

The documentation can be found in the corrsponding [Wiki](https://github.com/SchulzLab/MOPRED-website/wiki/Home).

## Project Strucuture

.
├── .astro
├── node_modules
├── public/
│   ├── hackathons/
│   │   ├── hackathon_14-12-2023
│   │   └── ...
│   ├── symposia/
│   │   ├── symposium_10-10-2023
│   │   └── ...
│   ├── favicon_128x128_light.svg
│   ├── logo_160x50_bg_dark.svg
│   └── logo_horizontal_300x140.svg
├── src/
│   ├── assets
│   ├── components/
│   │   ├── events
│   │   ├── navigation
│   │   ├── AccentBackground.astro
│   │   └── ...
│   ├── content/
│   │   ├── hackathons/
│   │   │   ├── hackathon_14-12-2023.mdx
│   │   │   └── ...
│   │   ├── symposia/
│   │   │   ├── symposium_10-10-2023.mdx
│   │   │   └── ...
│   │   └── config.ts
│   ├── js
│   ├── layouts
│   ├── pages
│   ├── styles
│   ├── utils
│   └── env.d.ts
├── astro.config.mjs
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.mjs
└── tsconfig.json
