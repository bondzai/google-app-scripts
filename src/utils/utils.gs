const LINE_NOTIFY_ACCESS_TOKEN = PropertiesService.getScriptProperties().getProperty("LINE_NOTIFY_ACCESS_TOKEN");
const BACKEND_URL1 = PropertiesService.getScriptProperties().getProperty("BACKEND_URL1");
const BACKEND_URL2 = PropertiesService.getScriptProperties().getProperty("BACKEND_URL2");

const sendLineNotifyMessage = (msg) => {
    try {
        const url = "https://notify-api.line.me/api/notify";

        const token = LINE_NOTIFY_ACCESS_TOKEN;
        const message = "\n" + msg;

        const response = UrlFetchApp.fetch(url, {
            method: "post",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            payload: {
                message: message,
            },
        });
    } catch (e) {
        Logger.log(`Error: ${e.message}`);
    }
};

const sendHttpGetRequest = (url) => {
    try {
        const response = UrlFetchApp.fetch(url, {
            method: "get",
            muteHttpExceptions: true,
        });
    } catch (e) {
        sendLineNotifyMessage(
            url + response.getResponseCode(`Error: ${e.message}`)
        );
    }
};

const main = () => {
    sendHttpGetRequest(BACKEND_URL1);
    sendHttpGetRequest(BACKEND_URL2);
};
