function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("USA", 200, 20)); 
console.log(getShippingMessage("Germany", 500, 30));
console.log(getShippingMessage("France", 1000, 50)); 