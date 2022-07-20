class googleSheet {
  constructor(sheetName) {
    const googleSheet = SpreadsheetApp.getActive().getSheetByName(sheetName)
    if (googleSheet !== null) {
      this.name = sheetName
      const columnCode = ["", "A", "B", "C", "D", "E", "F", "G", "H",
        "I", "J", "K", "L", "M", "N", "O", "P", "Q",
        "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
      this.lastColumn = columnCode[googleSheet.getLastColumn()]
      this.lastRow = googleSheet.getLastRow()
      this.keys = googleSheet.getRange("A1:" + this.lastColumn + "1").getValues()
      this.values = googleSheet.getRange("A2:" + this.lastColumn + this.lastRow).getValues()
    }
    else {
      console.log("Error, Sheet not found.")
    }
  }
}