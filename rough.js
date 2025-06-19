let dollar =0
let inr = 0

// let currency = fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json').then((res) => res.json()).then((res) =>{dollar = res.eur['usd']; inr = res.eur['inr']}).then((res) => console.log(inr/dollar))

fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json').then((res) => res.json()).then(res => {
    let currency = res.eur
    for (const key in currency) {
       console.log(key)
    }
})