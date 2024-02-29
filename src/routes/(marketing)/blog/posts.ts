export const blogInfo = {
  name: "SaaS Starter Blog",
  description: "A sample blog",
}

export type BlogPost = {
  link: string
  date: string // date is a string 'YYYY-MM-DD'
  title: string
  description: string
  parsedDate?: Date // Optional because it's added dynamically
}

// Update this list with the actual blog post list
// Create a page in the "(posts)" directory for each entry
const blogPosts: BlogPost[] = [
  {
    title: "Example Blog Post 2",
    description: "Even more example content!",
    link: "/blog/awesome_post",
    date: "2022-9-23",
  },
  {
    title: "How to build a SaaS Webpage in 12 easy steps",
    description: "A getting started guide for saas websites.",
    link: "/blog/how_to_build_saas_page",
    date: "2022-12-26",
  },
  {
    title: "Example Blog Post",
    description: "A sample blog post, showing our blog engine",
    link: "/blog/example_blog_post",
    date: "2023-03-13",
  },
]

// Parse post dates from strings to Date objects
for (const post of blogPosts) {
  if (!post.parsedDate) {
    const dateParts = post.date.split("-")
    post.parsedDate = new Date(
      parseInt(dateParts[0]),
      parseInt(dateParts[1]) - 1,
      parseInt(dateParts[2]),
    ) // Note: months are 0-based
  }
}

export const sortedBlogPosts = blogPosts.sort(
  (a: BlogPost, b: BlogPost) =>
    (b.parsedDate?.getTime() ?? 0) - (a.parsedDate?.getTime() ?? 0),
)
