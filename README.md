# mykhaylo-dyachenko.dev

Personal portfolio. React + Vite + Tailwind CSS v4, deployed to AWS
(S3 + CloudFront + Route 53) via a GitHub Actions pipeline.

## How deployment works

`.github/workflows/deploy.yml` runs on every push to `main`:
checkout -> setup Node -> `npm ci` -> `npm run build` -> `aws s3 sync ./dist`
-> invalidate CloudFront. The build must succeed before the sync runs, so a
broken build can never publish an empty `dist/` to the live site.
