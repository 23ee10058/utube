import axios from 'axios'
const API=axios.create({baseURL :`http://localhost:6500/`})
API.interceptors.request.use(req=>{
    if(localStorage.getItem('Profile')){
        req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const login=(authData)=>API.post('/user/login',authData)