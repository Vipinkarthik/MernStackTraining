import React from "react";

const Auth=(Wrap)=>
{
    return({isAuth,...props})=>
    {
        if(!isAuth)
        {
            return<p>Access Denied</p>
        }
       
    }
    return <Wrap{...props}/>
}
