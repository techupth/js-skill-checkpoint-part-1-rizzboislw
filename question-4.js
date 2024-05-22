// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

const findLowestStock = ((inven) => {
  let initialNum = inven[0]["quantity"]; 
  for (let list of inven){
    if (list["quantity"] < initialNum){
      return initialNum = list
    }
  }
})
  
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${findLowestStock(inventory)["name"]} ซึ่งมี ${findLowestStock(inventory)["quantity"]} ชิ้น` )
