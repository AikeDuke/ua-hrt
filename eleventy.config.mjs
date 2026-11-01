/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/sidebar.js");
  eleventyConfig.addPassthroughCopy("src/sidebar.html");
  eleventyConfig.addPassthroughCopy({ "src/assets": "/" });
};

export const config = {
  dir: {
    input: "src"
  }
};