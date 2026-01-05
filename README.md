# Portfolio Website - Shohaib Islam

A modern, responsive portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, minimalistic design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Professional color scheme
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 📝 Typewriter effect in hero section
- 🖼️ Project showcase with detailed modals
- 📧 Contact form
- 🔗 Social media integration

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/
│   ├── components/      # React components
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── data/
│   └── portfolio.ts     # Portfolio data/content
├── public/
│   ├── images/          # Images (profile, projects)
│   └── resume.pdf       # Resume file
├── types/
│   └── index.ts         # TypeScript types
└── ...config files
```

## Customization

### Update Personal Information

Edit `data/portfolio.ts` to update:
- Personal information (name, email, phone, WhatsApp)
- Social media links
- About me content
- Skills
- Services
- Projects
- Educational qualification

### Add Images

1. Replace `public/images/profile.jpg` with your profile photo
2. Replace project images in `public/images/projects/`
3. Update image paths in `data/portfolio.ts` if needed

### Add Resume

Replace `public/resume.pdf` with your actual resume PDF file.

### Update Colors

Edit `tailwind.config.ts` to customize the color scheme:
- Primary color
- Secondary color
- Accent color

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icons

## Notes

- All project and education data are currently demo/placeholder data
- Images are placeholders - replace with actual images
- Resume PDF is a placeholder - add your actual resume
- Contact form currently uses mailto link - can be integrated with EmailJS or API route

## License

Personal portfolio project.

