var ss = SpreadsheetApp.openById('xxx')
var sheet = ss.getSheetByName('xxx')

function doPost(e) {
    let action = e.parameter.action
    if (action == 'writeData') {
        return writeData(e)
    }
}

function writeData(e) {
    let data = JSON.parse(e.postData.contents)
    sheet.appendRow([
        data.no,
        data.name,
        data.description
    ])
  return ContentService.createTextOutput("success").setMimeType(ContentService.MimeType.TEXT)
}
