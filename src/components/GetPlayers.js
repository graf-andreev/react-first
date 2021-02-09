import axios from 'axios';

const TOKEN = 'keyCwfySabjYtLhwQ';

export default class GetPlayers{
    
    constructor(){
        this._instance = axios.create({
            baseURL: 'https://api.airtable.com/v0/appHa8fRHAYooDpmR',
            timeout: 5000,
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        });
    }

    getPlayers(){
        return this._instance
        .get('/Table%201')
        .then(response => response.data)
        .then(console.log(data))
    } 
}