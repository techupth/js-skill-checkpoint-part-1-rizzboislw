// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้

inventory[0]["quantity"] = 200
inventory.push({ name: "Orange", price: 20, quantity: 300 })

const calculateStockValue = ((array) => {
  let fruitValue = [];
  for (let eachFruit of array){
      fruitValue.push(eachFruit["price"] * eachFruit["quantity"])   
  }
  
  let result = 0;
  for (let number of fruitValue){
    result += number
  }

  return result
})


console.log(calculateStockValue(inventory));