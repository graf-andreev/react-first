import axios from 'axios';

const TOKEN = 'keyCwfySabjYtLhwQ';

export default class DataTable{
    
    constructor(){
        this._instance = axios.create({
            baseURL: 'https://api.airtable.com/v0/appy9mE4SLdRN1qd0',
            timeout: 5000,
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        });
    }

    getData(){
        return this._instance
        .get('/Table%201?')
        .then(response => response.data);
    } 
}