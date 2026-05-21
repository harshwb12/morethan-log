const CONFIG = {
  profile: {
    name: "Harsh",
    image: "/avatar.svg", 
    role: "Backend Software Developer",
    bio: "Optimizing backend order gateways at Amdocs using Java and AI.",
    email: "gharsh.sde@gmail.com",
    linkedin: "harsh12dec25",
    github: "harshwb12",
    instagram: "",
  },
  projects: [
    {
      name: `Harsh's Portfolio`,
      href: "https://github.com",
    },
  ],
  blog: {
    title: "Harsh's Blog & Bookshelf",
    description: "Welcome to my personal digital garden!",
    scheme: "dark", 
  },
  link: "https://morethan-log.vercel.app", 
  since: 2026, 
  lang: "en-US", 
  ogImageGenerateURL: "https://og-image-korean.vercel.app", 
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID || "10e577d02085453bb2efe195666fabec",
  },
  googleAnalytics: { enable: false, config: { measurementId: "" } },
  googleSearchConsole: { enable: false, config: { siteVerification: "" } },
  naverSearchAdvisor: { enable: false, config: { siteVerification: "" } },
  utterances: { enable: false, config: { repo: "", "issue-term": "og:title", label: "💬 Utterances" } },
  cusdis: { enable: false, config: { host: "https://cusdis.com", appid: "" } },
  isProd: process.env.VERCEL_ENV === "production", 
  revalidateTime: 10, 
}
module.exports = { CONFIG }
