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