class token {
  constructor(name, network, address, decimal) {
    this.name = name
    this.network = network
    this.address = address
    this.decimal = decimal
  }
}

function getTokenInfoByName(tokenName) {
  var result = null
  const sheetValues = getAllValuesFromSheet("DB_TOKEN")
  const tokens = []
  for (i in sheetValues) {
    tokens.push(new token(sheetValues[i][0], sheetValues[i][1], sheetValues[i][2], sheetValues[i][3]))
  }
  for (i in tokens) {
    if (tokens[i].name === tokenName) {
      result = tokens[i]
    }
  }
  if (result === null) {
    console.log("Error, Token not found.")
  }
  return result
}