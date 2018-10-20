<?php

// Use the global $_SERVER variable to dynamically get the current page's file path. basename() gets the filename from a path.
$activePage = basename($_SERVER['SCRIPT_FILENAME'], '.php');

// In the nav element below, there are inline conditional statements that check if $activePage is the same as the current menu item. If it is, add the class attribute with a value of active to add visible context to the menu.

// Also, $activePage has been added to the body element as a class. You can use this in your CSS to add different styles per page without additional code. See example in CSS below.

?>
<!doctype html>

<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>The Lecture Homepage</title>
		<link rel="stylesheet" href="css/index.css">
		<meta name="author" content="Team NWD">
		<meta name="description" content="This page is about...">
		<script src="js/jquery-3.3.1.min.js"></script>
		<script src="js/js.js"></script>
		
	</head>
	<body>
	<div id="header">
		<table>
		<tr>
		<td></td>
		<td><h1>Lecture Room</h1></td>
		</tr>
		</table>
		</div>
		<div id="container">
			<div id="games">
				<a href="/games.php">
				<button class="gamesbtn">Games</button>
			</div>
			<div id="boardImg">
				<a id="startBtn" onclick="plusSlides(1)">Start</a>	
				
				<div id="arrow">
					<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
					<a class="next" onclick="plusSlides(1)">&#10095;</a>
				</div>
			</div>
			
			<div id="details">
				<button id="showmore">Show Details</button>
			</div>
			<div id="drawing-board">
			<a id="bt1">Video Board</a>
			</div>
			
			<div id="previous-drwaing">
			<a id="previous-drwaing-bt">Story board</a>
			</div> 
			
			
		</div>
		<div id="imgPopup">
			<section class="popboard">

				<nav class="close-button">
					<a href="index.html">Close</a>
				</nav>

				

			</section>
		</div>
		
		<div id="drawing-board-popup">
			<section class="popdrawingboard">
				<nav class="close-button">
					<a href="index.html">Close</a>
				</nav>
				<div id="video">
					<iframe id="vdo" width="620" height="515"
					src="https://www.youtube.com/embed/dHSQAEam2yc" frameborder="0" allowfullscreen>
					</iframe>	
				</div>
			</section>
		</div>
		
		<div id="prvious-board-popup">
			<section class="prviousdrawingboard">
				<nav class="close-button">
					<a href="index.html">Close</a>
				</nav>
			</section>
		</div>		
</html>