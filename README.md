Benchmark for https://github.com/remix-run/remix/pull/8113

```sh
git # create 100 copies of app/routes/pageXXXX.tsx from misc/kentcdodds-blog.tsx
node misc/generate-bench.mjs
pnpm dev
```

---

# templates/unstable-vite

⚠️ Remix support for Vite is unstable and not recommended for production.

📖 See the [Remix Vite docs][remix-vite-docs] for details on supported features.

## Setup

```shellscript
npx create-remix@latest --template remix-run/remix/templates/unstable-vite
```

## Run

Spin up the Vite dev server:

```shellscript
npm run dev
```

Or build your app for production and run it:

```shellscript
npm run build
npm run start
```

[remix-vite-docs]: https://remix.run/docs/en/main/future/vite
