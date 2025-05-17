import type { Site, Metadata, Socials, KeepInTouch } from "@types";

export const SITE: Site = {
  NAME: "Jack Koss",
  EMAIL: "jack@jackkoss.org",
  NUM_POSTS_ON_HOMEPAGE: 1,
  NUM_WORKS_ON_HOMEPAGE: 1,
  NUM_PROJECTS_ON_HOMEPAGE: 1,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Jack Koss's personal website.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const KEEPINTOUCH: KeepInTouch = {
  PHONE: "01.713.252.3940"
};

export const SOCIALS: Socials = [
  // { 
  //   NAME: "twitter-x",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
  { 
    NAME: "github",
    HREF: "https://github.com/kossj"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/jack-koss-590746189/",
  }
];
