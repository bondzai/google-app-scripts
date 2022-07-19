function getApiKeyByName(apiName) {
  var result = null
  var apiKeys = getArrayOfObjects("DB_API_KEY")
  for (let i in apiKeys) {
    if (apiKeys[i].Name === apiName) {
      result = apiKeys[i]
    }
  }
  if (result === null) {
    console.log("Error, API-key not found.")
  }
  return result
}