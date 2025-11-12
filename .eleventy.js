export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addWatchTarget("style.css");
    eleventyConfig.addPassthroughCopy("img");
}
