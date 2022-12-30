const { DateTime } = require("luxon")




module.exports = function(eleventyConfig){
  eleventyConfig.setTemplateFormats(['html']);

  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPassthroughCopy('./src/script.js');

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
  })


  return {
    dir: {
      input: "src",
      output: "public"
    }
  };

}