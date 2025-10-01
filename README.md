# idev-website

A TypeScript, Next.js 14 application using React and Tailwind CSS. Includes common tooling for linting, formatting, and modern frontend development.

## Project Structure


## Tech Stack

- Next.js 14 (App Router)
- React + TypeScript
- Tailwind CSS + PostCSS + Autoprefixer
- ESLint (Next.js config)

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm (comes with Node.js)

## Getting Started

1) Install dependencies:
```terminaloutput
npm install
```

2) Set environment variables:
- Create a `.env.local` file in the project root.
- Add any required keys (e.g., API keys, SMTP credentials if emailing is used).

3) Run the development server:
```terminaloutput
npm run dev
```

4) Build:
```terminaloutput
npm run build
```

5) Start production server (after build):
```terminaloutput
npm run start
```

## Styling

- Tailwind CSS configured via `tailwind.config.ts`
- Global PostCSS pipeline configured in `postcss.config.mjs`

## Environment Variables

- Place non-secret defaults in `.env.local` for local development.
- Do not commit secrets. Use your hosting provider’s environment settings for production.

## Deployment

- Build the app:

- Works with platforms that support Next.js (e.g., Vercel, Node servers, containers).

## Contributing

- Use TypeScript and follow existing lint rules.
- Run `npm run lint` before committing.

## License

Specify your preferred license (MIT by default). Add a LICENSE file if needed.

## Author

- IDev, LLC