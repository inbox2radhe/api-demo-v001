/*
TTL_Renewal consists of test function to create T&R Renewal orders and vlaidate its status code and transction id.
Aurthor= Radhe Singh

*/

//@ts-check

const {test,request,expect}=require('@playwright/test');

const config= require('../config/config');
const tokenconfig= require('../config/config_token');

const token= require('../tokens/accesstoken');

const apiutils= require('../utils/apiUtils');

const excelutils= require('../utils/excelUtils')
const excelUitls01= require('../utils/excelUtils01')
const readexcel= require('../utils/readExcel')
const createjsonpayload= require('../utils/createJSONpayload')


const stgTokenPayload= require('../data/accessTokenPayloads/stagePayload.json');
const cDevTokenPayload= require('../data/accessTokenPayloads/cDevPayload.json');
const prodTokenPayload= require('../data/accessTokenPayloads/prodPayload.json');

//const renewalPayload= require('../data/orderPayloads/TTL_Renewal_Payload.json');
const leaseRegPayload= require('../data/orderPayloads/TTL_LeaseReg_Payload.json');
const regPayload     = require('../data/orderPayloads/TTL_Reg_Payload.json');
const titleOnlyPayload= require('../data/orderPayloads/TTL_TitleOnly_Payload.json');




test.describe.serial('MKT API Test', ()=>{

    let baseURL;
    let tokenurl;
    let access_token;
    let env_val;

    test.beforeAll('Setting up base URL',async()=>{

        baseURL= await config.baseURL;
        console.log('Base URL Value=',`${baseURL}`)

        tokenurl= await tokenconfig.token_baseURL;
        console.log('Token Base URL Value=',`${baseURL}`)

    });

    test('Get Access Token',async({request})=>{

        console.log('==Access Token functions started==')
        env_val= process.env.ENV;

        console.log('==Environment value from testCase==', env_val)
        
        switch(env_val){
           
            case 'stage':access_token= await token.accesstoken(request,tokenurl,stgTokenPayload);break;
            case 'custDev':access_token= await token.accesstoken(request,tokenurl,cDevTokenPayload);break;
            case 'prod':access_token= await token.accesstoken(request,tokenurl,prodTokenPayload);break;

        }

        
        console.log("Access token generated successfully")
        console.log('==Token Value==',access_token)
        console.log('==Access Token functions completed==')
    });

test('Create Renewal Order',async({request})=>{

    console.log('==Renewal Order functions started==')

    const req_Payload= createjsonpayload;
    console.log('Request payload==', req_Payload)
    console.log('Request payload==',JSON.stringify(req_Payload, null, 2) )
        const response= await apiutils.post(access_token,request,baseURL,req_Payload);

            console.log('=====Renewal Order JSON response=====')
            console.log(response);
            console.log('==Renewal Order functions completed==')
});


});



