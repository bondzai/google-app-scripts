function convertStringToFloat(tokenName, balanceText) {
  var token = getTokenInfoByName(tokenName)
  var decimal = token.decimal
  switch (balanceText.length) {
    case decimal - 1:
      balance = "0.0" + balanceText.slice(0, 4)
      break
    case decimal:
      balance = "0." + balanceText.slice(0, 4)
      break
    case decimal + 1:
      balance = balanceText.slice(0, 1) + "." + balanceText.slice(1, 4)
      break
    case decimal + 2:
      balance = balanceText.slice(0, 2) + "." + balanceText.slice(2, 5)
      break
    case decimal + 3:
      balance = balanceText.slice(0, 3) + "." + balanceText.slice(3, 6)
      break
    case decimal + 4:
      balance = balanceText.slice(0, 4) + "." + balanceText.slice(4, 7)
      break
    case decimal + 5:
      balance = balanceText.slice(0, 5) + "." + balanceText.slice(5, 8)
      break
    case decimal + 6:
      balance = balanceText.slice(0, 6) + "." + balanceText.slice(6, 9)
      break
    case decimal + 7:
      balance = balanceText.slice(0, 7) + "." + balanceText.slice(7, 10)
      break
    case decimal + 8:
      balance = balanceText.slice(0, 8) + "." + balanceText.slice(8, 11)
      break
    case decimal + 9:
      balance = balanceText.slice(0, 9) + "." + balanceText.slice(9, 12)
      break
    case decimal + 10:
      balance = balanceText.slice(0, 10) + "." + balanceText.slice(10, 13)
      break
    default:
      balance = 0
  }
  return balance
}