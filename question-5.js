// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
const promotionCode2 = "SALE20";
const promotionCode3 = "SALE50";

function calculateTotalPrice(product, promotionCode){

  let allProductPrice = []
  for (let item of product){
    allProductPrice.push(item["price"] * item["quantity"]) 
  }
  
  let totalNumber = allProductPrice.reduce((acc, current) => {
    return acc + current
  },0)
  
    if (promotionCode === "SALE20" ){
      totalNumber -= totalNumber * ( 1 / 5)
    } else if (promotionCode === "SALE50"){
      totalNumber -= totalNumber * ( 2 / 4 )
    } else {
      return totalNumber
    }

    return totalNumber
  
}

console.log(calculateTotalPrice(products,promotionCode))
console.log(calculateTotalPrice(products,promotionCode2))
console.log(calculateTotalPrice(products,promotionCode3))
