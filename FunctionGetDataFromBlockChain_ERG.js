function getTokenBalanceERG(tokenName, walletName) {
  var token = getTokenInfoByName(tokenName)
  var wallet = getWalletInfoByName(walletName)
  var url = getURLtokenBalanceERG(wallet.address)
  var dataObject = JSON.parse(UrlFetchApp.fetch(url).getContentText())
  var balanceText = dataObject.confirmed.nanoErgs.toString()
  var balance = convertStringToFloat(tokenName, balanceText)
  console.log(token)
  console.log(wallet)
  console.log(balance)
  return balance
}

function getURLtokenBalanceERG(walletAddress) {
  var url = ""
  var urlPart = {
    head: "https://api.ergoplatform.com/api/v1/addresses/",
    walletAddress: walletAddress,
    tail: "/balance/total"
  }
  url = urlPart.head + urlPart.walletAddress + urlPart.tail
  return url
}