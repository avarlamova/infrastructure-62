const fetch = require("node-fetch")
const url = "https://api.tracker.yandex.net/v2/issues/INFRA-62"
const {OAUTH_TOKEN, TAG_NAME, AUTHOR} = process.env
// let OAUTH_TOKEN = 'y0_AgAAAABG_epAAAhWcgAAAADMpApoGD8sXOqJQKS1ZCEdxrI1mAVPDW0';
let headersList = {
    "X-Org-ID": "7261414",
    "Authorization": `OAuth ${OAUTH_TOKEN}`,
    "Content-Type": "application/json"
}
//
async function fetchToken() {
    const response = await fetch(url,{
        method: "GET",
        headers: headersList
    })
    const ticket = await response.json()
    // console.log(ticket)
}

updateTicket();

async function updateTicket() {
    console.log(AUTHOR, TAG_NAME)
    await fetch(url,{
        method: "PATCH",
        headers: headersList,
        body: JSON.stringify({
            "description": `Ответственный за релиз ${AUTHOR}`
        })
    })

}

// console.log(fetchToken())