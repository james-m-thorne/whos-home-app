
export default function request(method: string, url: string) {
    console.log(process.env.API_KEY)
    const headers = {Authorization: process.env.API_KEY ? process.env.API_KEY : ''}
    return fetch(url, {method: method, headers: headers})
}