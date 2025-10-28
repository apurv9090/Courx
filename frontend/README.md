# CourX · Immersive Web3 Learning Dashboard (UI)

This React + Vite frontend delivers the CourX experience described in the SRS — a neon-soaked, Web3-inspired course platform with:

- Cinematic landing page, dynamic stats, and testimonials
- Rich course catalog, detail pages, and Razorpay-focused checkout flow
- Role-specific dashboards for students, instructors, and admins
- Auth screens (login, register, OTP reset) and course creation UI mockups

Styling is powered by Tailwind CSS with custom neon themes, Framer Motion animations, smooth Lenis scrolling, and Headless UI/heroicons for interaction polish. No backend or data persistence is included; all views present high-fidelity UI mocks aligned with the SRS requirements.

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

Visit the dev server URL (default: `http://localhost:5173`) to explore the animated experience.

### Available Scripts

- `npm run dev` – start Vite in development mode with HMR
- `npm run build` – create a production build (already verified once)
- `npm run preview` – locally preview the production build
- `npm run lint` – run ESLint on project sources

## Key Libraries

- **Tailwind CSS + tailwindcss-animate** for responsive neon aesthetic
- **Framer Motion** for immersive transitions
- **Lenis** for buttery-smooth scrolling
- **React Router** for routing across all SRS-driven screens
- **@headlessui/react & @heroicons/react** for accessible interactive primitives

Feel free to extend animations, replace placeholder imagery, or connect real APIs when you build the production backend.
