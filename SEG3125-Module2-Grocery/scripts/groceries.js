	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	//Organic 
	{
		name: "Brocoli",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Apples",
		lactoseFree: false,
		nutFree: false,
		organic: true,
		price: 1.65
	},
	{
		name: "Tomato",
		lactoseFree: false,
		nutFree: false,
		organic: true,
		price: 2.65
	},
	{
		name: "Bread",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "Salmon",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price: 10.00
	},
	//Contains Lactose
	{
		name: "Yogurt",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		price: 3.45
	},	
	{
		name: "Milk",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		price: 3.22
	},
	{
		name: "Cheese",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		price: 4.10
	},
	//Contains Nut
	{
		name: "Peanuts",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 2.14
	},
	{
		name: "Trail-Mix",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 2.65
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactoseFree") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "nutFree") && (prods[i].nutFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
