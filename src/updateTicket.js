const fetch = require("node-fetch")
const url = "https://api.tracker.yandex.net/v2/issues/INFRA-62"
const {OAUTH_TOKEN, TAG_NAME, AUTHOR, COMMITS} = process.env
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
    const formatter = new Intl.DateTimeFormat("ru");
    const currentDate = formatter.format(new Date())//.toLocaleDateString()

    console.log(AUTHOR, TAG_NAME, COMMITS)
    await fetch(url,{
        method: "PATCH",
        headers: headersList,
        body: JSON.stringify({
            "description": `Ответственный за релиз ${AUTHOR} \n 
            Коммиты, попавшие в релиз: \n
            ${COMMITS}`,
            "summary": `Релиз ${TAG_NAME} от ${currentDate}`
        })
    })

}

// console.log(fetchToken())