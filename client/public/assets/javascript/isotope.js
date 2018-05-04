// initialize layout once images have loaded
var $grid = $(".grid").imagesLoaded(function() {
	$grid.isotope({
		itemSelector: ".grid-item",
		layoutMode: "fitRows",
		masonry: {
			columnWidth: ".grid-item"
		}
	});
});

// filter functionality
$(".filterlist").on("click", ".filter", function() {
	console.log("boop");
	var filterValue = $(this).attr("data-filter");
	$grid.isotope({ filter: filterValue });
});