#Instructions:
This application is a mock portfolio built as part of the Udacity Front-End Development Nanodegree. It made up of a central portfolio page and 4 project pages.

The web-ready, optimized copies of all files are located in the Build folder. To launch this applicaiton simply copy the contents of the Build folder into the root directory of your website.

This project was optimized using grunt. Development copies of all files are in the root folder. The optimized version of the website is located in the build folder. If you wish to make changes to the files and optimize them for the web you can learn how to use Grunt at 
[http://gruntjs.com/](http://gruntjs.com/).


**No animals were harmed during the production of this application**

##Optimizations:

*Used grunt to automate build process.
	*Minified images
	*Uglified JS
	*Autoprefixed CSS to improve cross-browser compatibility
	*TODO: UNCSS to remove unnecessary CSS
	*TODO: Minify CSS
	*TODO: Minify HTML

###index.html
*Used WebFrontLoader to improve speed from font loading
*Used UNCSS to create page specific CSS stylsheet from Style.css and inlined the resulting styling
*Added media attribute for print stylesheet
*Loaded google analytics asynchronously
*Included perfmatters.js inline

###pizza.html
*Added backface-visibility: hidden to reduce the size of areas redrawn
*Stored list of pizza elements and descriptions in a variable on load instead of *traversing the DOM every time the pizzas were resized.
*Changed the styling for the pizzas and descriptions to improve visibility on smaller screen sizes (this including changing the JavaScript to manipulate new styling).
*Used more efficient query selectors to make PizzaResize faster.
*Restyled all Pizza elements at once instead of iterating through them.
*Precalculated all lengths used in for loops to prevent calculating the same thing multiple times.
*Minimzed use of querySelectorAll in favor or native getElemensById and getElementsByClass
*Reduced unecessary background pizzas.
*Made determination of number of background pizzas dynamic so that only enough pizzas are created to achieve desired density.

_For further details on differences see tmo_diffs.txt_

##Resources:
*[Web Font Loader](https://github.com/typekit/webfontloader)
*[Learning Grunt](http://css-tricks.com/grunt-people-think-things-like-grunt-weird-hard/)
*[More Efficient Redrawing](http://benfrain.com/improving-css-performance-fixed-position-elements/)
___

# Original Assignment Content

## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>




