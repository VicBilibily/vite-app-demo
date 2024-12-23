import { TDesignResolver } from "weapp-vite/auto-import-components/resolvers";
import { UnifiedViteWeappTailwindcssPlugin } from "weapp-tailwindcss/vite";
import { defineConfig } from "weapp-vite/config";
import path from "node:path";

export default defineConfig({
  weapp: {
    srcRoot: "src",
    jsonAlias: {
      entries: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "src", "components"),
        },
      ],
    },
    enhance: {
      autoImportComponents: {
        resolvers: [TDesignResolver()],
        globs: ["src/components/**/*"],
      },
    },
    generate: {
      extensions: {
        js: "ts",
        wxss: "less",
        json: "ts",
      },
      dirs: {
        component: "src/components",
        page: "src/pages",
      },
    },
  },
  plugins: [
    UnifiedViteWeappTailwindcssPlugin({
      rem2rpx: true,
    }),
  ],
});
