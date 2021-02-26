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
        .then(response => response.data)
        .then(data => {
            return data.records.map(row => {
                return {
                    id: row.id,
                    name: row.fields.Name,
                    additional: JSON.parse(row.fields.additional),
                    counter: row.fields.counter,
                    description: row.fields.description,
                    game: row.fields.game,
                    image: row.fields.image,
                    price: row.fields.price,
                    oldprice: row.fields.oldprice
                };
            });
        });
    } 
    getPro(){
        return this._instance
        .get('/Table%202')
        .then(response => response.data)
        .then(data => {
            return data.records.map(row => {
                return {
                    id: row.id,
                    name: row.fields.name,
                    winrate: row.fields.winrate,
                    game: row.fields.game,
                    photo: row.fields.photo,
                    status: row.fields.status
                };
            });
        });
    } 
}
