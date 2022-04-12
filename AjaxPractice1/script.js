const btn = document.querySelector('#btn')
const incomingData = document.querySelector('#incomingData')

btn.addEventListener('click', getData)

function getData() {
    let xhr = new XMLHttpRequest()

    xhr.open('GET', 'data.txt', true)
    xhr.send()

    xhr.onload = function() {
        if (this.status === 200) {
            incomingData.textContent = this.responseText
        }
    }
    // xhr.onreadystatechange = function() {
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText)
    //     }
    // }
}