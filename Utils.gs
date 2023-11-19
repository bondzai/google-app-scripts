function convertTimeStampToDateTime(timeStamp) {
  var dateTime = new Date(timeStamp * 1000)
  var dateTimeResult = Utilities.formatDate(dateTime, "GMT+7", "yyyy-MM-dd HH:mm:ss")
  return dateTimeResult
}

function getColumnCode(columnIndex) {
  const columnCode = ["", "A", "B", "C", "D", "E", "F", "G", "H",
    "I", "J", "K", "L", "M", "N", "O", "P", "Q",
    "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const result = columnCode[columnIndex]
  return result
}

function getAllValuesFromSheet(sheetName) {
  var googleSheet = SpreadsheetApp.getActive().getSheetByName(sheetName)
  if (googleSheet === null) {
    console.log("Error, Sheet not found.")
    result = null
  }
  else {
    var lastRow = googleSheet.getLastRow()
    var lastColumnIndex = googleSheet.getLastColumn()
    var lastColumn = getColumnCode(lastColumnIndex)
    var range = "A2:" + lastColumn + lastRow
    var result = googleSheet.getRange(range).getValues()
  }
  return result
}

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

function getSigleObject(key, value) {
  const result = {}
  for (let i in key) {
    result[key[i]] = value[i]
  }
  return result
}

function getArrayOfObjects(keys, values) {
  const result = []
  var singleObject
  for (let i in values) {
    for (let j in keys) {
      singleObject = getSigleObject(keys[j], values[i])
    }
    result.push(singleObject)
  }
  return result
}

  /* This is the result	
  { Name: 'BUSD',
    Network: 'BEP20',
    Address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    Decimal: 18 }
  */

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
