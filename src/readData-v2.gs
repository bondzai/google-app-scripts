var ss = SpreadsheetApp.openById('xxx')

function doGet(e) {
    let action = e.parameter.action
    let sheetName = e.parameter.sheetName
    if (action == 'getData') {
        return getData(e, sheetName)
      }
}

function getData(e, sheetName) {
    var sheet = ss.getSheetByName(sheetName)
    const columnRange = sheet.getRange(1, 1, 1, sheet.getLastColumn());
    const columnRangeValues = columnRange.getValues();
    const keys = columnRangeValues[0];
    const rows = sheet.getRange(2,1,sheet.getLastRow()-1,sheet.getLastColumn()).getValues();
    const data = [];
    for (const i in rows) {
        let row = rows[i];
        const record = {};
        for (const j in row) {
          let key = keys[j];
          let value = row[j];
          record[key] = value;
        }
        data.push(record);
    }
    let result = JSON.stringify(data);
    return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}
