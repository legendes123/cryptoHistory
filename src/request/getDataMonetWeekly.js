const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '363ab7a249mshf6f86836fe2c601p11bed8jsn1ec576bb4639',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    }
}
export async function getDataMonetWeekly(value) {
    let response = await fetch(
        `https://alpha-vantage.p.rapidapi.com/query?market=CNY&function=DIGITAL_CURRENCY_WEEKLY&symbol=${value}`,
        options
    )
    let data = await response.json()
    return data
}
