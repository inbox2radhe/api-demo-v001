
const{test,expect}= require('@playwright/test')
const exceljs=require('exceljs');
const path=require('path');
const fs= require('fs')



test('Reading Excel',async()=>
{

    const workbook= new exceljs.Workbook();
    const filepath= path.join(__dirname,'../tests/testData/Stage_TTL_ORDERS_Data.xlsx');
    console.log('filepath==',filepath)
    console.log('File Exists',fs.existsSync(filepath));

    await workbook.xlsx.readFile(filepath);

        const worksheet= await workbook.getWorksheet('Sheet1');
        worksheet.eachRow((row, rownumber)=>
            {
                //console.log(`Row ${rownumber}`, row.values);
                    row.eachCell((cell ,colnumber)=>
                    {
                        console.log(`Row ${rownumber}, Col ${colnumber}:`,cell.value);
                    });
            });
        
     
    


});


