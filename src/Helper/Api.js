import axios from 'axios';
import { API_BASE_URL } from '../Constant';


export function getRequest(apiUrl) {
    const url = API_BASE_URL + apiUrl;
    console.log("api url", url)
    const header = {
        "Access-Control-Allow-Origin": "*",
        "Authorization": localStorage.getItem('Token') ? 'Bearer' + ' ' + localStorage.getItem('Token') : ''
    }
    return axios({
        method: 'get',
        url: url,
        headers: header
    })
}

export function postRequest(apiUrl, data) {
    const url = API_BASE_URL + apiUrl;
    console.log("api url", url)
    const header = {
        "Access-Control-Allow-Origin": "*",
        "Authorization": localStorage.getItem('Token') ? 'Bearer' + ' ' + localStorage.getItem('Token') : ''
    }
    return axios({
        method: "post",
        url: url,
        data: data,
        headers: header
    })
}