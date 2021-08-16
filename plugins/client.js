
import axios from 'axios'

const instance = axios.create({
    baseURL: process.browser ? '' : process.env.API_HOST, //←これを追加。ブラウザのときは 空 もしくは/apiから始まるようにしないとproxyが効かずフロントから取得できないです。
    withCredentials: process.env.NODE_ENV !== 'production',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*'
    },
    timeout: 20000
})
export const client = instance