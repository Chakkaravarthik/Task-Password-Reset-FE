const URL = 'http://localhost:7500'
// user register 
const usersignup = async (userdata) =>{
    try{
        const res = await fetch(`${URL}/register`,{
            method: "POST",
                body: JSON.stringify(userdata),
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
        })
        return await res.json();
    }catch(e){
        console.log(e.message);
    }
}

const userlogin = async (logindata)=>{
    try{
        const res= await fetch(`${URL}/login`,{
            method: "POST",
                body: JSON.stringify(logindata),
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
        })
        return await res.json();
       
    }catch(e){
        console.log(e.message)
    }
}


const forgetpassword = async (email)=>{
   try{
    const res =await fetch(`${URL}/forget-password`,{
        method: "POST",
        body: JSON.stringify(email),
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    })
    return await res.json();
   }catch(e){
    console.log(e.message)
   }
}

const resetpassword = async ({token, password})=>{
    try{
        const res=await fetch(`${URL}/reset-password`,{
            method: "POST",
            body: JSON.stringify({ token,password}),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        })
        return await res.json();
    }catch(e){
        console.log(e.message)
    }

}

const verifypassword = async ({token}) =>{
    try{
        const res= await fetch(`${URL}/verify-password`,{
            method: "POST",
            body: JSON.stringify({token}),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        })
        return await res.json();
    }catch(e){
        console.log(e.message)
    }
}



export {usersignup , userlogin , forgetpassword, resetpassword, verifypassword};