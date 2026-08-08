module.exports = function (eleventyConfig) {
  // Общие статические файлы
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("videos");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("admin");

  // Локальные материалы отдельных страниц
  eleventyConfig.addPassthroughCopy("pages/**/images");
  eleventyConfig.addPassthroughCopy("pages/**/videos");

  // Старый фрагмент пока не участвует в сайте
  eleventyConfig.ignores.add("includes/**");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
