# mykhaylo-dyachenko.dev

Personal portfolio. React + Vite + Tailwind CSS v4, deployed to AWS
(S3 + CloudFront + Route 53) via a GitHub Actions pipeline.

## Run it locally

    npm install        # first time only — also creates package-lock.json
    npm run dev        # preview at http://localhost:5173

## Edit your content (no component code needed)

All content lives in three data files:

- `src/data/site.js`      — your name, email, tech stack, stats, social links
- `src/data/projects.js`  — the project cards
- `src/data/articles.js`  — the "Writing" list (your Medium posts)

### Add a finished project

Open `src/data/projects.js` and add one object to the array:

    {
      title: "Multi-Cloud Weather Tracker with DR",
      blurb: "Short description of what you built and why it matters.",
      tags: ["Terraform", "AWS", "Azure", "Route 53"],
      links: [
        { label: "Live site", href: "https://..." },
        { label: "GitHub", href: "https://github.com/MishaD8/..." },
        { label: "Write-up", href: "https://medium.com/..." },
      ],
    }

Save, commit, push. The pipeline builds and deploys automatically.

## Before your first deploy — three things

1. Add your photo as `public/me.jpg` (see the note file in that folder).
2. Fill in the REPLACE_WITH_... placeholders in `site.js`, `projects.js`,
   and `articles.js` (your LinkedIn URL, Medium handle, article links).
3. Commit `package-lock.json` — the CI pipeline runs `npm ci`, which needs it.

## How deployment works

`.github/workflows/deploy.yml` runs on every push to `main`:
checkout -> setup Node -> `npm ci` -> `npm run build` -> `aws s3 sync ./dist`
-> invalidate CloudFront. The build must succeed before the sync runs, so a
broken build can never publish an empty `dist/` to the live site.
