function convertNumberToPrice(inputNumber) {
  var price = inputNumber.toString()
  switch (price.length) {
    case 1, 2, 3:
      price = price
      break
    case 4:
      price = price.slice(0, 1) + "," + price.slice(1, price.length)
      break
    case 5:
      price = price.slice(0, 2) + "," + price.slice(2, price.length)
      break
    case 6:
      price = price.slice(0, 3) + "," + price.slice(3, price.length)
      break
    case 7:
      price = price.slice(0, 1) + "," + price.slice(1, 4) + "," + price.slice(4, price.length)
      break
    case 8:
      price = price.slice(0, 2) + "," + price.slice(2, 5) + "," + price.slice(5, price.length)
      break
    case 9:
      price = price.slice(0, 3) + "," + price.slice(3, 6) + "," + price.slice(6, price.length)
      break
    case 10:
      price = price.slice(0, 1) + "," + price.slice(1, 4) + "," + price.slice(4, 7) + "," + price.slice(7, price.length)
      break
    default:
      price = 0
  }
  return price
}