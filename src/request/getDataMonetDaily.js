const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '363ab7a249mshf6f86836fe2c601p11bed8jsn1ec576bb4639',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    }
}
export async function getDataMonetDaily(value) {
    let response = await fetch(
        `https://alpha-vantage.p.rapidapi.com/query?market=CNY&symbol=${value}&function=DIGITAL_CURRENCY_DAILY`,
        options
    )
    let data = await response.json()
    return data
}
