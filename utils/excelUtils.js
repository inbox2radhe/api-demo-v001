/*
File Name= excelUtils.js
Purpose= excelUtils file provide capability to create , read, add, delete, edit data in excel files
Scope= Project wide
Author= Radhe Singh
*/

//@ts-nocheck
const {test,expect}=require('@playwright/test')
const exceljs=require('exceljs')
const path=require('path')
const fs=require('fs')
const { stringify } = require('querystring')
const { triggerAsyncId } = require('async_hooks')
const JSON5=require('json5')

const excelUtils={

    async readExcel(env){
        let filepath;
        let jsonPayload;
        let trimedVal;
        let jsonResult=[];
        
        console.log('Enviroment value from readexcel function=',env)
        const workbook= new exceljs.Workbook();
        
        switch(env){
            case 'stage':filepath= await path.join(__dirname, '../tests/testData/Stage_TTL_ORDERS_Data.xlsx');break;
            case 'custDev':filepath= await path.join(__dirname, '../tests/testData/custDev_TTL_ORDERS_Data.xlsx');break;
            case 'prod':filepath= await path.join(__dirname, '../tests/testData/Prod_TTL_ORDERS_Data.xlsx');break;
            default: throw new Error ('unknown environment',`${env}`)
        }

        const file_flag= fs.existsSync(filepath)
        console.log('Is file exists=',file_flag)
        if(!fs.existsSync(filepath))
        {
            throw new Error('File not exists',`${filepath}`)
        }
        await workbook.xlsx.readFile(filepath)
        const worksheet= await workbook.getWorksheet('Sheet1')
        worksheet.eachRow((row, rownumber)=>{
            if(Number(`${rownumber}`)==1)return
            row.eachCell((cell, colnumber)=>{


                console.log(`Row ${rownumber}, col ${colnumber}`,cell.value)
                let rownumber_val=Number(rownumber)
                let colnumber_val=Number (colnumber)


                if(rownumber_val==1 || colnumber_val==0)
                {

                    if(typeof cell.value==='object' && cell.value!==null)
                    {
                        console.log('Printing if cell value = Object')
                        jsonPayload=cell.value

                    }
                    else if(typeof cell.value==='string')
                    {   
                        console.log('Printing if cell value = string')
                         trimedVal= cell.value.trim();
                        console.log('trimed Cell Value==',trimedVal)
                        
                        if(trimedVal.startsWith('{') && trimedVal.endsWith('}'))
                        {
                            console.log('Printing if cell value starts with {}')
                            const cleanVal = trimedVal.replace(/[\n\r\t]/g, '').replace(/\s{2,}/g, ' ')

                            try{
                                //jsonPayload= JSON5.parse(cleanVal)
                                jsonPayload= String(cleanVal)

                            }catch(e) {
                                console.error('X JSON parse error',e)
                                console.error('Invalid JSON string was',jsonPayload)
                            }
                            
                        }else
                        {
                            jsonPayload=String(cell.value)
                        }

                    }else
                    {
                        jsonPayload=String(cell.value)
                    }
                }   
                if(jsonPayload !==undefined){
                    jsonResult.push(jsonPayload)
                }

            })

        });
        console.log('jsonResult',jsonResult)
        return jsonResult;
    }




}
module.exports= excelUtils



