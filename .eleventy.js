const imageShortcode = require("./src/_11ty/image.js");
const directoryOutputPlugin = require("@11ty/eleventy-plugin-directory-output");
const htmlmin = require("html-minifier");
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
	eleventyConfig.setQuietMode(true);
	eleventyConfig.addPlugin(directoryOutputPlugin);

	//Passthrough copy
	eleventyConfig.addPassthroughCopy("./src/fonts");
	eleventyConfig.addPassthroughCopy("./src/images");
	// eleventyConfig.addPassthroughCopy("./src/scripts");
	// eleventyConfig.addPassthroughCopy({"./src/favicons": "/"});
	// eleventyConfig.addPassthroughCopy("./src/manifest.webmanifest");

	//Watch target
	// eleventyConfig.addWatchTarget("./src/_includes/css/");
	// eleventyConfig.addWatchTarget('./src/scripts/');

	//Filter
	eleventyConfig.addFilter("addNbsp", (str) => {
		if (!str) {
			return;
		}
		let title = str.replace(/((.*)\s(.*))$/g, "$2&nbsp;$3");
		title = title.replace(/"(.*)"/g, '\\"$1\\"');
		return title;
	});
	eleventyConfig.addFilter("cssmin", function (code) {
		if (process.env.NODE_ENV === "production") {
			return new CleanCSS({}).minify(code).styles;
		} else {
			return code;
		}
	});

	// Collections
	eleventyConfig.addCollection("gallery", function (collectionApi) {
		return collectionApi.getFilteredByGlob("./src/gallery/*.md").sort(() => {
			return 0.5 - Math.random();
		});
	});

	//SHORTCODE
	eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

	//Transforms
	eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
		// Eleventy 1.0+: use this.inputPath and this.outputPath instead
		if (
			process.env.NODE_ENV === "production" &&
			this.outputPath &&
			this.outputPath.endsWith(".html")
		) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: false,
				removeComments: true,
				collapseWhitespace: true,
				collapseBooleanAttributes: true,
			});
			return minified;
		}

		return content;
	});

	return {
		// dataTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dir: {
			input: "src",
			output: "public",
		},
	};
};
