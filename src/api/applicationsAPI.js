// Cookie

// export const myApplicationsPromise = email =>{
//     return fetch(`http://localhost:3000/applications?email=${email}`,{
//         credentials:'include'
//     })
//     .then(res=>res.json())
// }

// firebase admin



export const myApplicationsPromise = (email, accessToken) => {
    return fetch(`http://localhost:3000/applications?email=${email}`, {
        credentials: 'include',
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
}