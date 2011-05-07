##JSWCMS

JSWCMS, or Javascript Website Content Management System, is a javascript file that loads content from text files
and formats them. Currently it has limited features but I am working towards a complete system using javascript.

###How to use:

In your HTML file, in the
	 <head></head>
 tags, put the following code:

	<script type="text/javascript" src="wcms.js"></script>
	<script src="http://code.jquery.com/jquery-1.5.1.js " type="text/javascript"></script>

and put the file "wcms.js" in your website directory. Then, name a div in your webpage "content" like this:

	<div id="content"></div>

You will also need a div with the id "header" and a div with the id "footer".

This is the text file format:

- index.html loads content from index.txt
- about.html loads content from about.txt
- etc...

All web pages load headers and footers from "header.txt" and "footer.txt" respectively.
