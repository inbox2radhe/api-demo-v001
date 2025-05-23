


const environments={

    stage:{

        baseURL:'https://api.stgmarketplace.vinlocity.io/v1/mktorderrequests',
        tokenPayload:{  "client_id":"kLaWRrOOlLGAcY6zmuIjt2isgj80wCgt",
                        "client_secret":"PU1PufJ7r0cg7RmDs0pYKxr_pF6AbIl_e5kL2vqKzrbGQcPppDAwwYaTml5S-eU8",
                        "audience":"https://api.stgmarketplace.vinlocity.io/",
                        "grant_type":"client_credentials"
                    }

    },

    custDev:{
        baseURL:'https://api.devmarketplace.vinlocity.io/v1/mktorderrequests',
        tokenPayload:{  "client_id":"z5Hd7WxjTdhOIIgR62E2bkqXIaPRkfqe",
                        "client_secret":"L4q-HwN_fIwjn60w0Y6HU31_IMGWu5GV_aJq8QVstFg1Zdp2X-2vRDwOGKpYRRRD",
                        "audience":"https://api.devmarketplace.vinlocity.io/",
                        "grant_type":"client_credentials"
                    }
    },

    prod:{
        baseURL:'https://api.marketplace.vinlocity.io/v1/mktorderrequests',
        tokenPayload:{  "client_id":"sxxdLtogEMjkK2dN1qAlymLp4AxDChoy",
                        "client_secret":"Vgd5x9iWxtttEGt8ufOHnIoZuBsJ8vGSb9mO97AtvfqGejQYazYHeK0pQGsmfvS4",
                        "audience":"https://api.marketplace.vinlocity.io/",
                        "grant_type":"client_credentials"}
    }



};

let env= process.env.ENV || 'stage';

const config={

    environment: env,
    baseURL: environments[env].baseURL


};
module.exports= config;


