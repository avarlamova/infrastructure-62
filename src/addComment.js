const fetch = require("node-fetch")
const url = "https://api.tracker.yandex.net/v2/issues/INFRA-62/comments"
const {OAUTH_TOKEN, TAG_NAME} = process.env
let headersList = {
    "X-Org-ID": "7261414",
    "Authorization": `OAuth ${OAUTH_TOKEN}`,
    "Content-Type": "application/json"
}
const commentText = `Собран образ с тэгом ${TAG_NAME}`
async function addComment() {

    await fetch(url,{
        method: "POST",
        headers: headersList,
        body: JSON.stringify({
            "text": commentText
        })
    })
}

addComment()

