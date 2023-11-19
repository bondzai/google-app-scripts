class googleSheet {
  constructor(sheetName) {
    this.package = SpreadsheetApp.getActive().getSheetByName(sheetName)
    if (googleSheet !== null) {
      this.name = sheetName
      const lastColumn = this.getColumnCode()
      const lastRow = this.package.getLastRow()
      const key = this.package.getRange("A1:" + lastColumn + "1").getValues()
      this.keys = key[0]
      this.values = this.package.getRange("A2:" + lastColumn + lastRow).getValues()
      this.objectValues = this.getArrayOfObjects()
    }
    else {
      console.log("Error, Sheet not found.")
    }
  }
  getColumnCode() {
    const columnCode = ["", "A", "B", "C", "D", "E", "F", "G", "H",
      "I", "J", "K", "L", "M", "N", "O", "P", "Q",
      "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const lastColumnIndex = this.package.getLastColumn()
    const result = columnCode[lastColumnIndex]
    return result
  }
  getArrayOfObjects() {
    const result = []
    let singleObject = {}
    for (let i in this.values) {
      for (let j in this.keys) {
        singleObject[this.keys[j]] = this.values[i][j]
      }
      result.push(singleObject)
      singleObject = {}
    }
    return result
  }
}
