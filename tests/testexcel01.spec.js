
const {test, except}=require('@playwright/test')
const exceljs=require('exceljs')
const fs=require('fs')
const path=require('path')


test('reading excel',async()=>{

    const workbook= new exceljs.Workbook();

    const filepath= await path.join(__dirname,'../tests/testData/Stage_TTL_ORDERS_Data.xlsx')
    const fileflag= fs.existsSync(filepath)
    console.log('Is file exists=', fileflag)

    await workbook.xlsx.readFile(filepath)


    const worksheet= await workbook.getWorksheet('Sheet1');
    await  worksheet.eachRow((row,rownumber)=>{

             row.eachCell((cell, colnumber)=>{


                console.log(`Row ${rownumber}, col ${colnumber}`,cell.value)
            })

    })





})