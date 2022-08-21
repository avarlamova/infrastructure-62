const fetch = require("node-fetch")
const url = "https://api.tracker.yandex.net/v2/issues/INFRA-62"
const {OAUTH_TOKEN, TAG_NAME} = process.env
let headersList = {
    "X-Org-ID": "7261414",
    "Authorization": `OAuth ${OAUTH_TOKEN}`,
    "Content-Type": "application/json"
}
const commentText = `Собран образ с тэгом ${TAG_NAME}`
console.log(commentText)
// async function addComment() {
//
//     await fetch(url,{
//         method: "PATCH",
//         headers: headersList,
//         body: JSON.stringify({
//             "comments": {"add": [commentText]}
//         })
//     })
// }
//
// addComment()

