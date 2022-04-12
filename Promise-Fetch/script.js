// function getData(data) {
//     return new Promise((resolve,reject) => {
//         if (typeof data === 'string') {
//             resolve(data)
//         } 
//         else {
//             reject(new Error('Bir string deyer gir amk!'))
//         }
//     })
// }

// getData(28)
// .then(response => console.log(response))
// .catch(err => console.error(err))



// function addTwo(data) {
//     return new Promise((resolve,reject) => {
//         if (typeof data === 'number') {
//             resolve(data + 3)
//         } 
//         else {
//             reject(new Error('Bir sayi gir amk cocugu!'))
//         }
//     })
// }


// addTwo(28)
// .then(age => {
//     console.log(age)
//     return age + 3
// })
// .then(newAge => console.log(newAge))
// .catch(err => console.error(err))

// ________________________________________________________________

// function getTextFile() {
//     fetch('content.txt')
//     .then(response => response.text())
//     .then(newResp => console.log(newResp))
//     .catch(err => console.log(err))
// }

// getTextFile()


// function getJSONFile() {
//     fetch('example.json')
//     .then(response => response.json())
//     .then(newResp => console.log(newResp))
//     .catch(err => console.log(err))
// }

// getJSONFile()


// function getExternalFile() {
//     fetch('https://jsonplaceholder.typicode.com/comments/5')
//     .then(response => response.json())
//     .then(newResp => console.log(newResp))
//     .catch(err => console.log(err))
// }

// getExternalFile()


// __________________________________________________________________


class Request {

    get(url) {
        return new Promise((resolve,reject) => {
            fetch(url)
            .then(response => response.json())
            .then(newResp => resolve(newResp))
            .catch(err => reject(err))
        })
    }

    post(url,data) {
        return new Promise((resolve,reject) => {
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response => response.json())
            .then(newResp => resolve(newResp))
            .catch(err => reject(err))
        })
    }

    put(url,data) {
        return new Promise((resolve,reject) => {
            fetch(url,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response => response.json())
            .then(newResp => resolve(newResp))
            .catch(err => reject(err))
        })
    }

    delete(url) {
        return new Promise((resolve,reject) => {
            fetch(url,{
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(newResp => resolve(newResp))
            .catch(err => reject(err))
        })
    }
}

const request = new Request()

// console.log(typeof request.get('https://jsonplaceholder.typicode.com/comments'))

// request.get('https://jsonplaceholder.typicode.com/comments')
// .then(album => console.log(album))
// .catch(err => console.log(err))



// request.post('https://jsonplaceholder.typicode.com/comments', {name: 'Togrul', age: 28})
// .then(album => console.log(album))
// .catch(err => console.log(err))



// request.put('https://jsonplaceholder.typicode.com/comments/456', {name: 'Nahid', age: 31})
// .then(album => console.log(album))
// .catch(err => console.log(err))


// request.delete('https://jsonplaceholder.typicode.com/comments/456fgfgf')
// .then(album => console.log(album))
// .catch(err => console.log(err))
