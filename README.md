# ramonak.io

Source code for [ramonak.io](https://ramonak.io), my personal site and blog.

The site has three parts:

- **Portfolio**: selected client and personal projects, with the stack and my role on each.
- **Blog**: 30+ posts written since 2019, mostly hands-on tutorials on React, TypeScript, Next.js, Vaadin and AWS.
- **Contact**: a contact form that sends email through [Resend](https://resend.com).

## Stack

- [Next.js 16](https://nextjs.org) (App Router) with React 19 and TypeScript
- Markdown posts parsed with `gray-matter` and rendered with `react-markdown`, `remark-gfm`, `rehype-raw` and `rehype-highlight`
- CSS Modules, self-hosted Manrope and Newsreader fonts
- `react-hook-form` for the contact form, Resend for delivery
- Google Analytics 4 (optional)
- Generated `sitemap.xml` and `robots.txt`, per-page Open Graph and Twitter metadata
- Hosted on [Vercel](https://vercel.com)

## Project layout

```
app/              routes, layouts and components
  about/          about page
  contact/        contact page
  posts/          blog index and post pages (posts/[slug])
  projects/       portfolio and project data
  api/send/       contact form endpoint (Resend)
content/posts/    blog posts as Markdown files, named YYYY-MM-DD--title.md
lib/              site config and post loading helpers
public/           images used by posts and pages
scripts/          maintenance scripts, such as the post validator
```

## License

The source code is released under the [MIT License](LICENSE). Blog posts, images and other content in `content/` and `public/` are © Katsiaryna Lupachova, all rights reserved. Code snippets inside posts are free to use under the MIT License. See [LICENSE](LICENSE) for details.

## Contact

- Site: [ramonak.io](https://ramonak.io)
- GitHub: [@KaterinaLupacheva](https://github.com/KaterinaLupacheva)
- LinkedIn: [Katsiaryna Lupachova](https://www.linkedin.com/in/katsiaryna-lupachova/)
- X/Twitter: [@ramonak_io](https://twitter.com/ramonak_io)
