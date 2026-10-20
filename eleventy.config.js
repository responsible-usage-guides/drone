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

  // Box for sections covering regulations, with a last-reviewed date:
  //   {% lawNote "2026-10-20" %}Markdown text{% endlawNote %}
  // Blank lines around the content let markdown-it render it as Markdown.
  eleventyConfig.addPairedShortcode("lawNote", (content, reviewed) => {
    const date = new Date(`${reviewed}T00:00:00Z`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(reviewed ?? "") || isNaN(date)) {
      throw new Error(`lawNote: expected a YYYY-MM-DD date, got "${reviewed}"`);
    }
    const label = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
    return `<aside class="law-note">\n\n${content.trim()}\n\n<p class="last-reviewed">Last reviewed: <time datetime="${reviewed}">${label}</time></p>\n</aside>`;
  });

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
