const userData = [
	{id: 1,name: "Felix",},
	{id: 2,name: "Juna",},
	{id: 3,name: "Elias",},
	{id: 4,name: "Pernilla",},
]

const items = [
	{id: 1,name: "Laptop", price: 23399, stock: 100},
	{id: 2,name: "Monitor", price: 5699, stock: 52},
	{id: 3,name: "Paper Airplane", price: 25, stock: 0},
	{id: 4,name: "Chair", price: 399, stock: 3},
	{id: 5,name: "Pizza", price: 75, stock: 0},
]

const verifyCustomer = async (id) => {
	let user = userData.find(user => user.id === id);
	
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (user) {
				resolve(user);
			}
			reject(new Error("No user found with this ID"));
		}, 200)
	});
};

// setTimeout(() => {console.log(verifyCustomer(2))},200);

const checkStock = async () => {
	let filteredItems = items.filter(item => item.stock > 0);
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (filteredItems.length > 0) {
				resolve(filteredItems);
			}
			reject(new Error("No stock found"));
		}, 800)
	});
};

// setTimeout(() => {
// 	console.log(checkStock());}, 800);

const processPayment = async (total) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (total <= 500) {
				resolve("Bye Bye Money!");
			}
			reject(new Error("Insufficient funds"));
		}, 500);
	});
};

// console.log(processPayment(499));

const processOrder = async () => {
	
	const user = await verifyCustomer(80);
	const stock = await checkStock();
	const pay = await processPayment(499);
	Promise.all([user, stock, pay]).then((x) => {
		try {
			console.log(x);
		} catch (error) {
			console.error(error);
		} 
	}); 
}

processOrder();