import { Server } from "http"

let APIURL = ''

switch (window.location.hostname) {
    case 'localhost':
    case '127.0.0.1':
        APIURL = 'http://localhost:3000'
        break
    case  'poetree-server.herokuapp.com':
        APILURL= 'https://poetree-server.herokuapp.com'   
}

export default APIURL