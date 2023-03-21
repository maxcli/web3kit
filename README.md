after git clone :
CD web3kit
npm install


 npm install --save arweave
css : 
https://picocss.com/docs/

==============================================
client route example : 
http://localhost:5173/aritems/2


Links : 
https://www.youtube.com/watch?v=qlmDj7q2x0c

Dummy json:
https://dummyjson.com/docs/posts

Vercel deploy: 

---npm run build before git push---

PS D:\gitsrc\web3kit> npx vercel
Vercel CLI 28.16.7
? Set up and deploy “D:\gitsrc\web3kit”? [Y/n] y
? Which scope do you want to deploy to? petercli-hotmailcom
? Link to existing project? [y/N] n
? What’s your project’s name? archivistbulkapi
? In which directory is your code located? ./
Local settings detected in vercel.json:
Auto-detected Project Settings (SvelteKit):
- Build Command: vite build
- Development Command: vite dev --port $PORT
- Install Command: `yarn install`, `pnpm install`, or `npm install`
- Output Directory: public
? Want to modify these settings? [y/N] n

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
