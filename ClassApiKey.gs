class apiKey {
  constructor(name, address, description) {
    this.name = name
    this.address = address
    this.description = description
  }
}

function getApiKeyByName(apiName) {
  var result = null
  const sheetValues = getAllValuesFromSheet("DB_API_KEY")
  const apikeys = []
  for (i in sheetValues) {
    apikeys.push(new apiKey(sheetValues[i][0], sheetValues[i][1], sheetValues[i][2]))
  }
  for (i in apikeys) {
    if (apikeys[i].name === apiName) {
      result = apikeys[i]
    }
  }
  if (result === null) {
    console.log("Error, API-key not found.")
  }
  return result
}