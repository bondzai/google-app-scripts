//==================================================================================
function getTokenBalanceBEP20(tokenName, walletName) {
  var token = getTokenInfoByName(tokenName)
  var wallet = getWalletInfoByName(walletName)
  var url = getURLtokenBalanceBEP20(token.address, wallet.address)
  var mainObject = JSON.parse(UrlFetchApp.fetch(url).getContentText())
  var balanceText = mainObject.result
  var balance = convertStringToFloat(tokenName, balanceText)
  console.log(token)
  console.log(wallet)
  console.log(balance)
  return balance
}
function getURLtokenBalanceBEP20(tokenAddress, walletAddress) {
  var apiKey = getApiKeyByName("Binance")
  var url = ""
  var urlPart = {
    head: "https://api.bscscan.com/api?module=account&action=tokenbalance",
    tokenAddress: "&contractaddress=" + tokenAddress,
    walletAddress: "&address=" + walletAddress,
    tail: "&tag=latest=&apikey=" + apiKey.address
  }
  url = urlPart.head + urlPart.tokenAddress + urlPart.walletAddress + urlPart.tail
  return url
}
//==================================================================================

//==================================================================================
function getTokenTotalSupplyBEP20(tokenName) {
  var token = getTokenInfoByName(tokenName)
  var url = getURLtokenTotalSupplyBEP20(token.address)
  var mainObject = JSON.parse(UrlFetchApp.fetch(url).getContentText())
  var balanceText = mainObject.result
  var balance = convertStringToFloat(tokenName, balanceText)
  console.log(token)
  console.log(balance)
  return balance
}
function getURLtokenTotalSupplyBEP20(tokenAddress) {
  var apiKey = getApiKeyByName("Binance")
  var url = ""
  var urlPart = {
    head: "https://api.bscscan.com/api?module=stats&action=tokensupply",
    tokenAddress: "&contractaddress=" + tokenAddress,
    tail: "&apikey=" + apiKey.address
  }
  url = urlPart.head + urlPart.tokenAddress + urlPart.tail
  return url
}
//==================================================================================