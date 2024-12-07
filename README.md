### Create new Vite project, Install packages and start

```
npx create-next-app@latest client
```

### Setup Shadcn

```
- npx shadcn-ui@latest init
Need to install the following packages:
  shadcn-ui@0.7.0
Ok to proceed? (y) y
√ Would you like to use TypeScript (recommended)? ... no / yes
√ Which style would you like to use? » Default
√ Which color would you like to use as base color? » Slate
√ Where is your global CSS file? ... src/globals.css
√ Would you like to use CSS variables for colors? ... no / yes
√ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) ...
√ Where is your tailwind.config.js located? ... tailwind.config.js
√ Configure the import alias for components: ... @/components
√ Configure the import alias for utils: ... @/lib/utils
√ Are you using React Server Components? ... no / yes
√ Write configuration to components.json. Proceed? ... yes
```

### Tech Stack

- React.js
- Next.JS
- Clerk
- Convex
- Shadcn
- Stripe Connect
- TypeScript
- Tailwind CSS

### Intallation packages

- npm install @clerk/nextjs --legacy-peer-deps
- npm install convex --legacy-peer-deps

### Convex
- npx convex login
- npx convex dev
- npx convex import --table events convex/sampleData.json

### Convex database
- https://dashboard.convex.dev/t/tomisar/ticketer-79e64/brave-impala-53/data?table=events


### shadcn/ui Components
- npx shadcn@latest init
- npx shadcn@latest add button
- npx shadcn@latest add toast


### Documentation
- https://ui.shadcn.com/
- https://dashboard.clerk.com/apps/app_2ppxHUKDHOe9jlAzU5yAeG8Ruix/instances/ins_2ppxHakGS5dSOKjnhNh1PFCBRJF
- https://docs.convex.dev/quickstart/nextjs
- https://docs.convex.dev/auth/clerk
- https://clerk.com/nextjs-authentication?utm_medium=youtube&utm_source=sonny-sangha&utm_campaign=ticketmaster-clone
- https://lcl.host/

### Set Up Environment Variables

- Create a new file named .env in the root of your project and add the following content:
