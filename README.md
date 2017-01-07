# Free-Slider
## Simple and easy-to use web slider plug-in

**If you want to contribute, read this document carefully before you start**

_**NEW!** online demo: http://mediame.ga/slider/_

Uses SASS, HTML5 and vanilla JS.
The purpose is to create a simple, easy-to implement and flexible JS slider plug-in.

The plug-in is filled with data with an AJAX request via JS `fetch` API.

**If you have ideas how to make this plug-in better, more flexible and easy-to-use, please contribute, your help is highly appreciated**
**If you want to use this software otherwise, please credit the author, @arsengoian according to the LICENSE**

### **Set-up instruction**
1. Download & unpack

2. Include `slider.js` and `slider.css` files from `free-slider` folder to your website's HTML 	`<head>` tag

3. Include `index.htm` file to your website

4. Include the following script:

	```javascript
		Slider.init(
			  // Your content address (such as PHP API) goes here. You may as well create your own .json files
			'http://' + window.location.hostname +'/content.json', 
			  // Desired element location
			document.getElementById("free-slider")
		)
	```

5. Set up and modify your `free-slider.scss` file and import it to your SASS source

6. Compile your SASS source

7. To test the plug-in you will need a server (because of the AJAX request and absolute file paths)

### **Conventions**
* Use TABs, not spaces
* Add any modifications to separate branches vith readable names
* _free-slider_ folder is for plug-in files, everything else is a demo

__enjoy__
