import axios from 'axios'

const API_URL= "http://movieql.club/api/v1/auth/"

const register = (email, username, password) => {
    return axios.post(API_URL +"users/", {
        email,
        username,
        password
    }).then((response)=>{

        console.log(response.data)
        return response.data
    })

}
const login = (username, password) => {
    return axios.post(API_URL + "jwt/create/",  {
        username, password
    }).then((response) =>{
        console.log(JSON.stringify(response.data))
        if(response.data.access){
            localStorage.setItem("user", JSON.stringify(response.data))

        }

        return response.data

        }

    ).catch((error) =>{
        if (error.response){
            console.log(error.response.data)
        }

    })


}
const logout = () =>{
    localStorage.removeItem("user")
}
const getCurrentUser = () =>{
    return JSON.parse(localStorage.getItem("user"))
}
const resetPassword = (email) => {
    return axios.post(API_URL+"users/reset_password/",{
        email
    }).then((response)=>
        {
            console.log(response.data)
        }
    )
}

const exported = {
    register,
    login,
    logout,
    getCurrentUser,
    resetPassword
}
export default exported