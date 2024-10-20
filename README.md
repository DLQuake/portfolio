# Next.js Portfolio Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It serves as a personal portfolio to showcase projects, skills, and a downloadable CV, using Next.js' latest features including **internationalization (i18n)** and PDF rendering.

## Features

- **Internationalization (i18n)**: This project supports multiple languages, with the ability to switch between languages (e.g., English and Polish) dynamically.
- **PDF Resume Viewer**: The resume is embedded as a PDF using `react-pdf`, allowing users to view and download your CV directly from the site.
- **Responsive Design**: Built with Bulma CSS framework to ensure a fully responsive design across devices.
- **Dark Mode Toggle**: Includes a dark mode switcher to enhance the user experience.
- **Deployment-ready**: Optimized for deployment with [Vercel](https://vercel.com).

## Getting Started

First, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
npm install
```

To start the development server, run:

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

## Project Structure

- `app/`: Contains the main app structure and routing system using the new Next.js `app/` directory.
- `components/`: Reusable components including buttons, headers, and forms.
- `messages/`: Stores translation files for internationalization (i18n).
- `public/`: Static assets like images and icons (e.g., flags for language switcher).

## Customization

- **Internationalization (i18n)**: To add or update languages, modify the files in the `messages/` folder and adjust the locale settings in `app/layout.js`.
- **PDF Viewing**: The PDF worker is set up in the `resume` page. If you wish to change the CV, replace the URL in the translation file for `ResumePage`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.