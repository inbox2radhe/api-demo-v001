const { platform } = require("os");


const {test}= require('@playwright/test')


// test('Testing Random VIN generator', async()=>{

//     const chars= 'ABCDEFGHJKLNPRSUVWYZ0123456789'
//     let VIN='';
//     let randomIndex
//     let randomChar

// for(let i=0; i<17; i++){

//     if(i===8){

//         VIN+='0'
//     }
//     else{    
//         randomIndex= Math.floor(Math.random()*chars.length)
//         randomChar= chars.charAt(randomIndex)
//         VIN+= randomChar
//     }

//     console.log(`Step ${i+1}: picked '${randomChar}', VIN so far:'${VIN}'`)
// }




// })

test('Actual Random VIN', async()=>{

const chars= 'ABCDEFGHJKLMNPRSTUVWXYZ0123456789';
let vin='';
let randomIndex;
let randomChar


/*world manufacturer Identifier WMI(position 1-3)= Identifies the manufacturer.
First char indicates the region, second char country where region exists. Third char assigned by national
organization to specific manufaturer 
*/ 

    const wmiOption= ['1G1','WVW','JT1','2T1','JA3','JH4','KM8','JN1']
    const randomWMIindex= Math.floor(Math.random()*wmiOption.length);
    vin+= wmiOption[randomWMIindex];

    console.log(`WNI Options set= '${vin}'`);


    /*
    VDS (Vehicle description section position 4-8) Describes general attribute of the vehicle such as model, style, and series
    This position is determined by manufacturer
    
    */
    const vdschar='ABCDEFGHJKLMNPRSTUVWXYZ0123456789';
    for(let i=3; i<8;i++){
        randomIndex= Math.floor(Math.random()*vdschar.length);
        randomChar= vdschar.charAt(randomIndex)
        vin+=randomChar;

        console.log('VIN so far=',`picked '${randomChar}', VIN so far '${vin}'`)
    }

    /**
     * Check digit (position 9)
     * 
     */

    vin+=Math.floor(Math.random*10);

    /**
     * VIS(Position 10-17) Vehicle Identifier section displays 
     * position 10= Model year of the vehicle
     * Position 11= Assembly plant code
     * poaition 12-17= unique serial number assigned by manufacturer
     */

    const vischar='ABCDEFGHJKLMNPRSTUVWXYZ0123456789';

    for(let i=9;i<17;i++){

        randomIndex= Math.floor(Math.random()*vischar.length);
        randomChar= vischar.charAt(randomIndex)
        vin+=randomChar;

        console.log('VIN so far=',`picked up ''${randomChar}, vin so far'${vin}'`)

    }


    console.log('Unique VIN generated==', vin)


})