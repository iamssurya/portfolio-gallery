Portfolio Gallery
===

Installation
---

Gallery that can be used to display your work/project portfolios

	npm install portfolio-gallery

Then include portfolio.css and portfolio.js in your webpage. Add Jquery & font-awesome as dependency (Included in Repository)

	<link rel="stylesheet" href="css/portfolio.css">
	<script src="js/portfolio.js"></script>

Setup
---

Initialize object for Portfolio

	var port = new Porfolio("port",portfolioData);

Data for creating portfolio to be provided in JSON

	var portfolioData = [{
		"title":"Your Portfolio Title",
		"image":"URL of the image",
		"description":"Description of the project"
	},{...}
	];

More Info
---

 * Send me an email at iamssurya@gmail.com
