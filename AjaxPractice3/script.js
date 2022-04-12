class Request {
    constructor() {
        this.xhr = new XMLHttpRequest()
    }
    get(url,callback) {
        this.xhr.open('GET',url)
        this.xhr.send()

        this.xhr.onload = function() {
            if (this.status === 200) {
                callback(null, this.responseText)
            }
            else {
                callback('Get sorunu var!', null)
            }
        }
    }

    post(url,data,callback) {
        this.xhr.open('POST', url)
        this.xhr.setRequestHeader('Content-type','application/json')
        this.xhr.send(JSON.stringify(data))

        this.xhr.onload = function() {
            if (this.status === 201) {
                callback(null, this.responseText)
            }
            else {
                callback('Post sorunu var!', null)
            }
        }
    }

    put(url,data,callback) {
        this.xhr.open('PUT', url)
        this.xhr.setRequestHeader('Content-type','application/json')
        this.xhr.send(JSON.stringify(data))

        this.xhr.onload = function() {
            if (this.status === 200) {
                callback(null, this.responseText)
            }
            else {
                callback('Put sorunu var!', null)
            }
        }
    }

    delete(url,callback) {
        this.xhr.open('DELETE',url);
        this.xhr.send()

        this.xhr.onload = function() {
            if (this.status === 200) {
                callback(null, this.responseText);
            }
            else {
                callback('Delete sorunu var!', null);
            }
        };
        
    }
}

const request = new Request()

// request.get('https://jsonplaceholder.typicode.com/todos', function(err,response) {
//     if (err === null) {
//         console.log(JSON.parse(response))
//     } 
//     else {
//         console.log(err)
//     }
 
// })

// request.post('https://jsonplaceholder.typicode.com/albums',{name: 'Togrul',age: 28}, function(err,response) {
//     if (err === null) {
//         console.log(response)
//     } 
//     else {
//         console.log(err)
//     }
// })

// request.put('https://jsonplaceholder.typicode.com/albums/2',{name: 'Togrul',age: 28}, function(err,response) {
//     if (err === null) {
//         console.log(response)
//     } 
//     else {
//         console.log(err)
//     }
// })

// request.delete('https://jsonplaceholder.typicode.com/albums/12121212', function(err,response) {
//     if (err === null) {
//         console.log(response);
//     } 
//     else {
//         console.log(err);
//     }
// });