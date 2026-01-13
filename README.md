# aaron-lau.com

My personal website built with Gatsby 5. Has my portfolio, blog posts, and a few other things.

## What's in here

- Portfolio/landing page with work experience and projects
- Blog with MDX support (markdown + React components)
- Dark/light theme toggle
- Syntax highlighting for code blocks
- Tag-based post filtering
- Contact form

## Local development

You'll need Node 22 LTS and Yarn 4:

```bash
node -v  # should be v22.x.x
yarn -v  # should be 4.x.x
```

Then just:

```bash
yarn install
yarn start
```

Site runs at `http://localhost:8000`. The GraphiQL explorer is at `http://localhost:8000/___graphql` if you need it.

## Deployment

Automatically deploys to Netlify on push to master. Build command is `yarn build`.
