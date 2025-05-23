

const XLSX= require('xlsx')
const path= require('path')
const fs= require('fs')


const readExcel={



async readexcel(env){

    let filepath= await path.join(__dirname,'../tests/testData/Stage_TTL_ORDERS_Data.xlsx')
    const fileflag= fs.existsSync(filepath)
    console.log('Is file exists==',fileflag)

    const workbook= XLSX.readFile(filepath)
    const worksheet= workbook.Sheets['sheet1']
    

        const cellref= await XLSX.utils.encode_cell({r:1,c:1})
        const cell= await worksheet[cellref]
        const value= await cell.value

        console.log('Cell Value=', value)

        if(typeof value=='string' && value.trim().startsWith('{')){

            try{
                return JSON.parse(value.trim())
            }catch(e){

                console.warn('JSON PARSE FAILED')
                return value
            }

        }
        return value


}





}
module.exports= readExcel
