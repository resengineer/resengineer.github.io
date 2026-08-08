module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("videos");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addPassthroughCopy("pages/**/images");
  eleventyConfig.addPassthroughCopy("pages/**/videos");

  eleventyConfig.ignores.add("includes/**");

  eleventyConfig.addCollection("highlights", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("highlights")
      .sort((a, b) => {
        if (a.data.year !== b.data.year) {
          return b.data.year - a.data.year;
        }

        return (a.data.order || 100) - (b.data.order || 100);
      });
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
