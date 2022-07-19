class wallet {
  constructor(name, type, network, address) {
    this.name = name
    this.type = type
    this.network = network
    this.address = address
  }
}

function getWalletInfoByName(walletName) {
  var result = null
  const sheetValues = getAllValuesFromSheet("DB_Wallet")
  const wallets = []
  for (i in sheetValues) {
    wallets.push(new wallet(sheetValues[i][0], sheetValues[i][1], sheetValues[i][2], sheetValues[i][3]))
  }
  for (i in wallets) {
    if (wallets[i].name === walletName) {
      result = wallets[i]
    }
  }
  if (result === null) {
    console.log("Error, Wallet not found.")
  }
  return result
}