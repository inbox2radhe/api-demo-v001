

const exceljs= require('exceljs')
const path= require('path')
const fs= require('fs')



const excelutils={
    
  

    async readingexcel(env){
        let payload
        let jsonData
        let celldata
        let rowVal

     const workbook= new exceljs.Workbook();
 
     const filepath= await path.join(__dirname,'../tests/testData/Stage_TTL_ORDERS_Data.xlsx')
     const fileflag= fs.existsSync(filepath)
     console.log('Is file exists=', fileflag)
 
     await workbook.xlsx.readFile(filepath)
 
 
     const worksheet= await workbook.getWorksheet('Sheet1');
     await  worksheet.eachRow((row,rownumber)=>{
 
              row.eachCell((cell, colnumber)=>{
 
 
                 console.log(`Row ${rownumber}, col ${colnumber}`,cell.value)
                 console.log('Cell value type', typeof(cell.value))
                 rowVal= Number(rownumber)
                if(rowVal===2){
                    celldata= cell.value
                    jsonData= JSON.parse(celldata)
                    console.log('JSON Data type', typeof(jsonData))
                    payload= jsonData                
                    console.log('playload ==',payload)
                }
             })
 
     })
 
        return payload
     



}




}
module.exports= excelutils