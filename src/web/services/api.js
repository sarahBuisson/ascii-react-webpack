import axios from 'axios'

export async function getMowers(){

    return axios.request({
        url: `http://localhost:3000/api/mowers`,

        method: 'GET'
    })
}


export async function putMower(mower) {

    return axios.request({
        url: `http://localhost:3000/api/mower`,

        data: mower,
        method: 'PUT'

    })
}
