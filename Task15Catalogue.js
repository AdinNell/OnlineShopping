// Creating an object and storing different items from line 2 - 14
function item(name, priceEle) {
	this.name = name
	this.price = priceEle;
};

let item1 = new item ("Xbox one X", 8999.00);
let item2 = new item ("PS4 Pro", 7999.00);
let item3 = new item ("Fifa 19", 699.00);
let item4 = new item ("Nacon Revolution Controller", 1440.00);
let item5 = new item ("Nintendo Switch", 3391.00);
let item6 = new item("Cricket 19",804.00)

sessionStorage.setItem("Catalogue", JSON.stringify([item1, item2, item3, item4, item5,item6]));


var amount = parseInt(localStorage.getItem("Amount"));
if (!amount) {
	amount = 0;
	var items = [];
	localStorage.setItem("Items", JSON.stringify(items));
} else {
	var items = JSON.parse(localStorage.getItem("Items"));
};

localStorage.setItem("Amount", amount);

if (!items) {
}

// Storing the information of the object of each button and an alert shows when the button is clicked on
// The function above is repeated for button lines  32 to 133
function addtocart1() {
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[0]];
	} else {
		b.push(a[0]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[0].price);
	alert("The current total of the items is R" + c);
};

function addtocart2() {
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[1]];
	} else {
		b.push(a[1]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[1].price);
	alert("The current total of the items is R" + c);
};

function addtocart3() {
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[2]];
	} else {
		b.push(a[2]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[2].price);
	alert("The current total of the items is R" + c);
};

function addtocart4() {
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[3]];
	} else {
		b.push(a[3]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[3].price);
	alert("The current total of the items is R" + c);
};

function addtocart5() {
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[4]];
	} else {
		b.push(a[4]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[4].price);
	alert("The current total of the items is R" + c);
};

function addtocart6() {
	var a = JSON.parse(sessionStorage.getItem("Catalogue"));
	var b = JSON.parse(localStorage.getItem("Items"));
	var c = parseInt(localStorage.getItem("Amount"));

	if (b == null) {
		b = [a[5]];
	} else {
		b.push(a[5]);
	};

	localStorage.setItem("Items", JSON.stringify(b));

	localStorage.setItem("Amount", c += a[5].price);
	alert("The current total of the items is R" + c);
};

