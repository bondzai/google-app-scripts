function getSigleObject(key, value) {
  const result = {}
  for (let i in key) {
    result[key[i]] = value[i]
  }
  return result
}

function getArrayOfObjects(sheetName) {
  const result = []
  var googleSheet = SpreadsheetApp.getActive().getSheetByName(sheetName)
  var lastColumnIndex = googleSheet.getLastColumn()
  var lastRow = googleSheet.getLastRow()
  var lastColumn = getColumnCode(lastColumnIndex)
  var myKeys = googleSheet.getRange("A1:" + lastColumn + "1").getValues()
  var myValues = googleSheet.getRange("A2:" + lastColumn + lastRow).getValues()
  var singleObject
  for (let i in myValues) {
    for (let j in myKeys) {
      singleObject = getSigleObject(myKeys[j], myValues[i])
    }
    result.push(singleObject)
  }
  return result
}

function run() {
  var result = getTokenInfoByName("BUSD")
  console.log(result)
  /* This is the result	
  { Name: 'BUSD',
    Network: 'BEP20',
    Address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    Decimal: 18 }
  */
}