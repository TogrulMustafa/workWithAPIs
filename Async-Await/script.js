// async function getData(data) {
//     // return data
//     const promise = new Promise((resolve,reject) => {
//         setTimeout(_ => {
//             resolve(data)
//         },5000)
//     })

//     const response = await promise

//     return response
// }

// getData('Hello')
// .then(x => console.log(x))






// async function getAlbums(url) {
//     const promise =  await fetch(url)
//     const response = await promise.json()
//     return response
// }

// getAlbums('https://jsonplaceholder.typicode.com/comments')
// .then(x => console.log(x))
// .catch(y => console.log(y))







class Request {

    async get(url) {
        // return new Promise((resolve,reject) => {
        //     fetch(url)
        //     .then(response => response.json())
        //     .then(newResp => resolve(newResp))
        //     .catch(err => reject(err))
        // })

        const fullObj = await fetch(url)
        const partObj = await fullObj.json()

        return partObj
    }

    async post(url,data) {
        // return new Promise((resolve,reject) => {
        //     fetch(url,{
        //         method: 'POST',
        //         body: JSON.stringify(data),
        //         headers: {
        //           'Content-type': 'application/json; charset=UTF-8',
        //         },
        //     })
        //     .then(response => response.json())
        //     .then(newResp => resolve(newResp))
        //     .catch(err => reject(err))
        // })

        const fullObj = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const partObj = await fullObj.json()
        return partObj
    }

    async put(url,data) {
        // return new Promise((resolve,reject) => {
        //     fetch(url,{
        //         method: 'PUT',
        //         body: JSON.stringify(data),
        //         headers: {
        //           'Content-type': 'application/json; charset=UTF-8',
        //         },
        //     })
        //     .then(response => response.json())
        //     .then(newResp => resolve(newResp))
        //     .catch(err => reject(err))
        // })

        const fullObj =await fetch(url,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const partObj = await fullObj.json()
        return partObj
    }

    async delete(url) {
        // return new Promise((resolve,reject) => {
        //     fetch(url,{
        //         method: 'DELETE'
        //     })
        //     .then(response => response.json())
        //     .then(newResp => resolve(newResp))
        //     .catch(err => reject(err))
        // })

        const fullObj = await fetch(url,{
            method: 'DELETE'
        })
        const partObj = await fullObj.json()
        return partObj
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



request.put('https://jsonplaceholder.typicode.com/comments/4ewde1', {name: 'Nahid', age: 31})
.then(album => console.log(album))
.catch(err => console.log(err))


// request.delete('https://jsonplaceholder.typicode.com/comments/456fgfgf')
// .then(album => console.log(album))
// .catch(err => console.log(err))
