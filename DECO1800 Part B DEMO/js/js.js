var slideIndex = 1;


function plusSlides(n) {
	showSlides(slideIndex += n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var btn=document.getElementById("startBtn");
	btn.style.display="none";
	var arrow= document.getElementById("arrow");
	arrow.style.display="block";
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
		  
	slides[slideIndex-1].style.display = "block";
	var popImg=document.getElementsByClassName("popImg");
	
	for (i = 0; i < popImg.length; i++) {
		popImg[i].style.display = "none";
	}
	popImg[slideIndex-1].style.display = "block";	  
}

function iterateRecords(data) {
	
	
	console.log(data);

	$.each(data.result.records, function(recordKey, recordValue) {

		var recordTitle = recordValue["title"];
		var recordImage = recordValue["500_pixel"];
		var recordDescription = recordValue["decsription"];
		var recordBigImage=recordValue["1000_pixel"];
		
		
			
			if(recordTitle && recordImage.endsWith(".jpg") && recordDescription){
				$("#boardImg").append(
					$('<div class="mySlides">').append(
						$('<img>').attr("src", recordImage)
						
						
					)
				);
				$(".popboard").append(
					$('<figure class="popImg">').append(
						$('<h3>').text(recordTitle),
						$('<img>').attr("src", recordBigImage),
						$('<p>').text(recordDescription)
						
					)
				);
				
			}
			
			

		

	});
	
}

$(document).ready(function() {
	var data = {
		resource_id: "5bc00f98-2d96-47d6-a0ca-2089ebd1130d",
		limit: 100
	}

	$.ajax({
		url: "https://data.gov.au/api/3/action/datastore_search",
		data: data,
		dataType: "jsonp", // We use "jsonp" to ensure AJAX works correctly locally (otherwise XSS).
		cache: true,
		success: function(data) {
			console.log(data);
			iterateRecords(data);
		}
	});
	
	$("body").addClass("js");

	$("#showmore, #imgPopup .close-button a").click(function(event) {
		$("body").toggleClass("show-imgPopup");
		event.preventDefault()
	});
	
	$("#drawing-board a, #drawing-board-popup .close-button a").click(function(event) {
		$("body").toggleClass("show-drawing-board-popup");
		event.preventDefault()
	});
	
	$("#previous-drwaing a, #prvious-board-popup .close-button a").click(function(event) {
		$("body").toggleClass("show-prvious-board-popup");
		event.preventDefault()
	});	
	


});
