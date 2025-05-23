/*
apiUtils.js file contains generice functions like get, post, put, and delete. 
These fucntions will accept valus run time and return the expected values back to calling function.
Author= Radhe Singh

*/
const {request, test, expect}=require('@playwright/test')


const apiUtils={

    async get(request, endpoint, expectedStatus=200){

        const response= await request.get(endpoint);
        expect(response.status()).toBe(expectedStatus);
        return await response.json();
    },

    async post(token,request, endpoint, playload){

         console.log('==Post functions started==')
         console.log('==Post functions started==')
         console.log('==token==',token)
         console.log('==endpoint==',endpoint)
         console.log('==payload==',playload)
            const response= await request.post(endpoint,{

                data: playload,
                headers:{
                    'Accept':'application/json',
                    'Authorization':`Bearer ${token}`
                },
                
            });
            console.log('Response body', await response.json())
            console.log('Response Status', await response.status())
            console.log('Response text', await response.text())
            expect(response.status()).toBe(201);
            console.log(await response.json())
            return await response.json();
    },

    async put(token, request, endpoint, playload, expectedStaus=200){
        
        const response= request.put(endpoint, {

                data: playload,
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':token,

                }
        });

        expect(response.status()).toBe(expectedStaus);
        return await response.json();
    },

    async delete(token, request, endpoint, playload, expectedStaus=200){

        const response= request.delete(endpoint);
        return await response.json();
            
    },

    async assertJSONresponse(responseBody, propertyPath, expectedVal){

        const properties= propertyPath.split('.');
        let val= responseBody;

        for(const prop of properties)
        {
            val=val[prop]
        }

        expect(value).toBe(expectedVal);
    },

};
module.exports= apiUtils;

