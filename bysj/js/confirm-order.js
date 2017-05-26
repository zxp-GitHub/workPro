Zepto(function() {
	var allPrice = localStorage.getItem("allPrice");
	$(".confirm-order-all-price").html(allPrice);
	$(".back-to-index-p").tap(function () {
	window.location.href = "index.html"+window.location.search;
})
});