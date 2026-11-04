/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */

import markdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import attrs from "markdown-it-attrs";

export default async function (eleventyConfig) {
  eleventyConfig.setLibrary("md", markdownIt().use(anchor).use(attrs));

  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/sidebar.js");
  eleventyConfig.addPassthroughCopy("src/sidebar.html");
  eleventyConfig.addPassthroughCopy({ "src/assets": "/" });
};

export const config = {
  dir: {
    input: "src"
  },
  markdownTemplateEngine: "liquid",
  htmlTemplateEngine: "njk"
};