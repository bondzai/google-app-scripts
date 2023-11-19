function deleteOldRows() {
    const ss = SpreadsheetApp.openById("sheetID");
    const sheet = ss.getSheetByName("sheetName");
    const dataRange = sheet.getDataRange();
    const values = dataRange.getValues();
    const today = new Date();
    const twoDaysAgo = new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000);

    for (let i = values.length - 1; i >= 0; i--) {
        const rowDate = values[i][0];
        if (rowDate instanceof Date && rowDate < twoDaysAgo) {
            sheet.deleteRow(i + 1);
        }
    }
}
