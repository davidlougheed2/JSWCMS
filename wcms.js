$(document).ready(function() {
/*
Website Content Management Script
By David Lougheed.

WARNING: THIS SCRIPT REQUIRES jQUERY 1.5.1 OR LATER
*/

var currloc = location.href;
var textloc = currloc.replace(/html/g, "txt");

if(currloc == textloc) {
	textloc = currloc+"index.html";
}

var textloc = textloc.replace(/html/g, "txt");

var justyt = false;
var tempdir = "./example.txt";
var footdir = "./footer.txt";
var headdir = "./header.txt";

var urlstuff = new Array();
    
//document.write(currloc);
//document.write(textloc);

//document.getElementById('content').innerHTML = "Error: this script requires jQuery.";

if (typeof jQuery == 'undefined') {  
    alert("ERROR 01: WCMS requires jQuery.\nPlease contact the site owner\nor get jQuery from http://jquery.com/");
} else {
    // jQuery is loaded
}

$.ajax({
    
    url : textloc,
    success : function (data) {
        if(data != "") {
            var ss = data;
        
            // document.write(textloc);
            
            ss = ss.replace(/(\r\n)|(\n)/g,"<br />");
            ss = ss.replace(/(\t)/g,"&nbsp;&nbsp;&nbsp;&nbsp;");
        
            ss = ss.replace(/\[main\]/g,"<span style=\"font-weight: bold; font-size: 42px;\">");
            ss = ss.replace(/\[\/main\]/g,"</span>");
        
            ss = ss.replace(/\[sub\]/g,"<span style=\"font-weight: bold; font-size: 32px;\">");
            ss = ss.replace(/\[\/sub\]/g,"</span>");
        
            ss = ss.replace(/\[bold\]/g,"<strong>");
            ss = ss.replace(/\[\/bold\]/g,"</strong>");
        
            ss = ss.replace(/\[ital\]/g,"<em>");
            ss = ss.replace(/\[\/ital\]/g,"</em>");

	    ss = ss.replace(/\[sup\]/g,"<sup>");
            ss = ss.replace(/\[\/sup\]/g,"</sup>");
        
            ss = ss.replace(/\[img\]/g, "<img src=\"");
            ss = ss.replace(/\[\/img\]/g, "\" />");
        
            ss = ss.replace(/\[imgleft\]/g, "<img align=\"left\" vspace=\"5\" hspace=\"5\" src=\"");
            ss = ss.replace(/\[\/imgleft\]/g, "\" />");
        
            ss = ss.replace(/\[imgright\]/g, "<img align=\"right\" vspace=\"5\" hspace=\"5\" src=\"");
            ss = ss.replace(/\[\/imgright\]/g, "\" />");

	    ss = ss.replace(/\[center\]/g, "<center>");
            ss = ss.replace(/\[\/center\]/g, "</center>");
        
            ss = ss.replace(/\[youtube\]/g, "<iframe title=\"YouTube video player\" width=\"480\" height=\"390\" src=\"");
            justyt = true;
            if(justyt) {
                ss = ss.replace(/http\:\/\/www\.youtube.com\/watch\?v\=/g, "http://www.youtube.com/embed/");
                justyt = false;
            }
            ss = ss.replace(/\[\/youtube\]/g, "\" frameborder=\"0\" allowfullscreen></iframe>");
        
            //ss = ss.replace(/[url]/g, "<a href=\"");
            //ss = ss.replace(/[\/url]/g, "\">");
            
            var data2 = ss;
        
            //data2 = textloc;
            
            //document.write("<pre>" + data2 + "</pre>");
        
            $("#content").html(data2);
            document.getElementById('content').innerHTML = data2;
        }
        else {
            $("#content").load('header.txt');
        }
    }
});

$.ajax({
    
    url : footdir,
    success : function (data) {
        if(data != "") {
            var ss2 = data;
            ss2 = ss2.replace(/©/g,"&copy;");
            
            var data3 = ss2;
            
            $("#footer").html(data3);
            document.getElementById('footer').innerHTML = data3;
        }
        else {
		document.write("ah no");
            location.reload(true);
	    window.setTimeout('location.reload()', 10);
        }
    }
});

$.ajax({
    
    url : headdir,
    success : function (data) {
        if(data != "") {
            var ss4 = data;
            ss4 = ss4.replace(/©/g,"&copy;");
            
            var data4 = ss4;
            
            $("#header").html(data4);
            document.getElementById('header').innerHTML = data4;
        }
        else {
            location.reload(true);
	    window.setTimeout('location.reload()', 10);
        }
    }
});

});
