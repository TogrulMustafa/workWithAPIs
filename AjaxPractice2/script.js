const btn = document.querySelector('#ajax')
const listItems = document.querySelector('#employees')


btn.addEventListener('click', getData)

function getData() {

    let xhr = new XMLHttpRequest()
    xhr.open('GET','employees.json',true)
    xhr.send()

    xhr.onload = function() {
        if (this.status === 200) {
            let datas = JSON.parse(this.responseText)

            datas.forEach(data => {
                listItems.innerHTML += 
                `
                <tr>
                    <td>${data.name}</td>
                    <td>${data.department}</td>
                    <td>${data.salary}</td>
                </tr>
                `
            });
        }
    }
}