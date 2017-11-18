function requestSiteName() {
var websiteUrl = window.prompt("Please enter the website URL.")
console.log(websiteUrl);
}


function tryURL() {

var possibleWebsites = [

"www.wikipedia.com",
"https://bbc.com",
"http://laphatize.me/testing",
"www.cnn.com"

]

if (possibleWebsites == websiteUrl)
	window.alert("This website has valid content")
} else {

window.alert("The website you entered has invalid content.")

}