import { getDatabase } from "@/lib/notion/client";
// import { getNavLink, getSite } from "@/lib/blog-helpers";
import type { SiteInfo } from "@/types";


const tl = "", ds = "", path = "/", oim = "";
const database = await getDatabase();

const rawTitle = database.Title.includes("||") ? database.Title.split(" || ")[0] : database.Title;
const siteAuthor = database.Title.includes("||") ? database.Title.split(" || ")[1] : "";
const siteTitle = tl ? `${tl} - ${rawTitle}` : rawTitle;
const siteDescription = ds ? ds : database.Description;
const siteWebmention = "";
// const siteURL = new URL(getNavLink(path), getSite()).toString();

// console.log(siteTitle, siteDescription, siteURL);


// export const siteInfo = () => {
//   return [siteTitle, siteDescription, siteURL];
// }

export const siteInfo: SiteInfo = {
  title: siteTitle,
  description: siteDescription,
  author: siteAuthor,
  lang: "en",
  homePageSlug: "index",
  // Include view-transitions: https://docs.astro.build/en/guides/view-transitions/
  includeViewTransitions: false,
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: "en",
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: "en",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  },
  webmentions: {
    link: "",
    // link: "https://webmention.io/astro-cactus.chriswilliams.dev/webmention",
    // site: "https://astro-cactus.chriswilliams.dev/",
  },
};
