<!DOCTYPE HTML>
<html>
	<head>
		<title>Слайдер для SEO ;P</title>
		<!-- include slider -->
		<link rel="stylesheet" href="/res/free-slider.css">
		<script src="/free-slider/slider.js"></script>
		<!-- end slider -->
		<style>
			body {
				margin: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}
		</style>
	</head>
	<body onload="">
		<div id="free-slider">
			<?php include 'free-slider/slider.htm' ?>
			<script>
				Slider.init(
					// Your content address (or PHP API goes here)
					'http://' + window.location.hostname +'/content.json', 
					// Desired element location
					document.getElementById("free-slider")
				);
			</script>
		</div>
	</body>
</html>