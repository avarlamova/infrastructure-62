const fetch = require("node-fetch")

const { OAUTH_TOKEN,TAG_NAME, AUTHOR, COMMITS, TICKET_ID, ORG_ID} = process.env
let headersList = {
    "X-Org-ID": ORG_ID,
    "Authorization": `OAuth ${OAUTH_TOKEN}`,
    "Content-Type": "application/json"
}



const updateTicketUrl = "https://api.tracker.yandex.net/v2/issues/"+TICKET_ID

async function updateTicket() {

    const formatter = new Intl.DateTimeFormat("ru");
    const currentDate = formatter.format(new Date())//.toLocaleDateString()
    await fetch(updateTicketUrl,{
        method: "PATCH",
        headers: headersList,
        body: JSON.stringify({
            "description": `Ответственный за релиз ${AUTHOR} \n 
            Коммиты, попавшие в релиз: 
            ${COMMITS}`,
            "summary": `Релиз ${TAG_NAME} от ${currentDate}`
        })
    })
}

updateTicket();

