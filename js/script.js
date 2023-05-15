'use strict'
const baseurl = 'https://danepubliczne.imgw.pl/api/data/synop'
const select=document.querySelector('#weatherCity')
const tbody=document.querySelector('table tbody')
const getWeather =async()=>{
    try {
        const Response = await fetch(baseurl)
        const data =await Response.json()
        return data
    } catch (err) {
        console.error
    }
}
getWeather().then(data =>{
    console.log(data)
    data.forEach(elem => {
        const option = document.createElement('option')
            option.text = elem.stacja.toUpperCase()
            option.value=elem.stacja
            select.appendChild(option)
    })
    select.addEventListener('change', ()=>{
        const selectedCity=select.selectedIndex-1
        console.log(data[selectedCity])
        const tr = document.createElement('tr')
            tr.innerHTML = `
            <td>${data[selectedCity].stacja}</td>
            <td>${data[selectedCity].data_pomiaru}</td>
            <td>${data[selectedCity].godzina_pomiaru}</td>
            <td>${data[selectedCity].temperatura}</td>
            <td>${data[selectedCity].suma_opadu}</td>
            <td>${data[selectedCity].cisnienie}</td>`
            tbody.appendChild(tr)
    })
})