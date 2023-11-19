var ss = SpreadsheetApp.openById('xxx')
var sheet = ss.getSheetByName('xxx')

function doGet(e) {
    let action = e.parameter.action
    if (action == 'readData') {
        return readData(e)
      }
}

function readData(e) {
    const rows = sheet.getRange(2,1,sheet.getLastRow()-1,sheet.getLastColumn()).getValues()
    const data = []
    for(let i = 0; i < rows.length; i++){
        let row = rows[i]
        let record = {}
        record['no']=row[0]
        record['name']=row[1]
        record['description']=row[2]
        data.push(record)
    }
     let result = JSON.stringify(data)
    return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON)
}

function readDynamicData(e) {
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
