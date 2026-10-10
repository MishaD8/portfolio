// Add a finished project by adding one object to this array.
export const projects = [
  {
    title: "Cloud Portfolio Infrastructure & CI/CD",
    blurb:
      "This very site. A static React build hosted on S3 and served through CloudFront, with Origin Access Control locking the bucket to the CDN, DNS on Route 53, and TLS from ACM — all provisioned from the AWS CLI. Every push to main auto-deploys through a least-privilege GitHub Actions pipeline.",
    tags: ["S3", "CloudFront", "Route 53", "ACM", "OAC", "GitHub Actions", "IAM", "WAF"],
    links: [
      { label: "Live site", href: "https://mykhaylo-dyachenko.dev" },
      { label: "GitHub", href: "https://github.com/MishaD8/portfolio" },
      { label: "Write-up · Part 1", href: "https://medium.com/@mihaeldyachenko/hosting-my-portfolio-on-aws-s3-cloudfront-and-route-53-all-from-the-cli-e55869ef8fdb" },
      { label: "Write-up · Part 2", href: "https://medium.com/@mihaeldyachenko/part-2-automating-my-portfolio-deployment-with-github-actions-including-the-bug-that-almost-c05011ccec7a" },
      { label: "Write-up · Part 3", href: "https://medium.com/@mihaeldyachenko/part-3-building-and-launching-my-cloud-portfolio-with-react-124975d08fbe" },
      { label: "Write-up · Part 4", href: "https://medium.com/@mihaeldyachenko/part-4-hardening-my-portfolio-with-aws-waf-what-it-protects-what-it-costs-and-why-i-tore-it-1e7530b8ac37" },
      { label: "Write-up · Part 5", href: "https://medium.com/@mihaeldyachenko/part-5-killing-the-keys-securing-my-pipeline-with-oidc-and-the-hidden-bug-that-took-four-failed-5a28899ee0de " },
    ],
  },
];
