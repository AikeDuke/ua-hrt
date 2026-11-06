/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */

import { HtmlBasePlugin } from "@11ty/eleventy";
import markdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import attrs from "markdown-it-attrs";
import filters from "./src/_config/filters.js";

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addPlugin(filters);

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