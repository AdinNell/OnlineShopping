var cartTotal = parseInt(localStorage.getItem("Amount"));

// If the user selects this type of delivery it will take the total amount plus the delivery fee price and give a final total
let pick = null;
$(".home").click(function() {
	if (pick != null) {
		if (pick == false) {
			localStorage.setItem("Amount", cartTotal += 0);
			alert("The total amount of your order is now R" + cartTotal)
			pick = true;
		};
	} else if (pick == null) {
		localStorage.setItem("Amount", cartTotal += 50)
		alert("You have chosen a delivery to your desired destination (Enter below).The total amount of your order is now R" + cartTotal)
		pick = true;
	};
});


// Function to create a random reference number
function confirm() {
	var h = parseInt(localStorage.getItem("Amount"));
	var k = JSON.parse(localStorage.getItem("Items"));

	localStorage.setItem("Amount", 0)
	localStorage.setItem("Items", JSON.stringify([]));

	var ref = (Math.random() * 0xFF).toString(16)
	alert("Please use the following Ref Number when recieving/collecting order. \nRef Number: " + ref+ "\n \nThank you for shopping with us!")
}
