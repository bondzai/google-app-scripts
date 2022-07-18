function convertTimeStampToDateTime(timeStamp) {
  var dateTime = new Date(timeStamp * 1000)
  var dateTimeResult = Utilities.formatDate(dateTime, "GMT+7", "yyyy-MM-dd HH:mm:ss")
  return dateTimeResult
}