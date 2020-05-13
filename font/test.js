var fontSpider = require("font-spider");

fontSpider
	.spider(["http://127.0.0.1:5500/index.html"], {
		silent: false,
	})
	.then(function (webFonts) {
        console.log(webFonts);
		// return fontSpider.compressor(webFonts, { backup: true });
	})
	.catch(function (errors) {
		console.error(errors);
	});
