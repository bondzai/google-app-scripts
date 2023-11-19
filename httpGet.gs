function sendHttpGetRequest() {
  var url = "xxx";
  var response = UrlFetchApp.fetch(url, {
    method: "get",
    muteHttpExceptions: true
  });
  Logger.log(response.getContentText());
}
