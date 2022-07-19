function getTokenInfoByName(tokenName) {
  var result = null
  var tokens = getArrayOfObjects("DB_TOKEN")
  for (let i in tokens) {
    if (tokens[i].Name === tokenName) {
      result = tokens[i]
    }
  }
  if (result === null) {
    console.log("Error, Token not found.")
  }
  return result
}