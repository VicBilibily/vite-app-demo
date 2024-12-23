import type { App } from "weapp-vite/json";

export default <App>{
  pages: ["pages/index/index", "pages/logs/logs"],
  tabBar: {
    custom: true,
    color: "#000000",
    selectedColor: "#000000",
    backgroundColor: "#000000",
    list: [
      {
        pagePath: "pages/index/index",
        text: "index",
      },
      {
        pagePath: "pages/logs/logs",
        text: "logs",
      },
    ],
  },
  window: {},
  componentFramework: "glass-easel",
  sitemapLocation: "sitemap.json",
  lazyCodeLoading: "requiredComponents",
};
