// Using the stored amount of the cart and deducting R200 from the total using an alert
var y = parseInt(localStorage.getItem("Amount"));

var a = document.getElementById("discount")

a.addEventListener("click", function() {
	localStorage.setItem("Amount", y - 200);
	alert("You have recieved a discount! The total of your items is now R" + y);
});
