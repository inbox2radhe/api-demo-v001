const{request}=require('@playwright/test');
const { json } = require('stream/consumers');




let accesstoken="";
const token={

async accesstoken(request,endpoint,payload,expectedStatus=200){

        console.log('Printing from accesstoken fucntion inside accesstoken.js file')
        console.log(endpoint,payload);
        const response= await request.post(endpoint,{
            data:payload,
            headers:{
                'Accept':'application/json',

            }
        });
    try{
        expect(response.status()).toBe(200); 
    }catch (e){
        console.log('Access Token not generated',e);
    }
    console.log('Access token response==',response)
     let accesstokenJSON= await response.json();
     accesstoken=await accesstokenJSON.access_token;
     return await accesstoken;
          
}

}
module.exports= token;