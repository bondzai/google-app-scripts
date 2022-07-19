function getWalletInfoByName(walletName) {
  var result = null
  var wallets = getArrayOfObjects("DB_WALLET")
  for (let i in wallets) {
    if (wallets[i].Name === walletName) {
      result = wallets[i]
    }
  }
  if (result === null) {
    console.log("Error, Wallet not found.")
  }
  return result
}