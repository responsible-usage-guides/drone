import { transform } from "lightningcss";
import markdownItAnchor from "markdown-it-anchor";

// GitHub-style heading ids, e.g. "1. Before you fly" -> "1-before-you-fly"
const slugify = (s) =>
  s
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  eleventyConfig.amendLibrary("md", (md) =>
    md.use(markdownItAnchor, { slugify }),
  );

  eleventyConfig.addTemplateFormats("css");
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile(inputContent) {
      return () => {
        const { code } = transform({
          code: Buffer.from(inputContent),
          minify: true,
        });
        return code.toString();
      };
    },
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
