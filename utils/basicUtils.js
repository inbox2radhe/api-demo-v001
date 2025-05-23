
const chars= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
let VIN='';

for(i=0;i<17;i++){

    const randomIndex= Math.floor(Math.random()*chars.length)
    const randomChar= chars.charAt(randomIndex)
    VIN+= randomChar
    console.log(`Step ${i+1}: picked '${randomChar}', VIN so far:'${VIN}'`)
}