


const environments={

    stage:{

        baseURL:'https://api.stgm.io/',
        tokenPayload:{  "client_id":"xxxxxxxxxxxxxx",
                        "client_secret":"xxxxxxxxxxxxxxx",
                        "audience":"https://api.stgm.io/",
                        "grant_type":"client_credentials"
                    }

    },

    custDev:{
        baseURL:'https://api.dev.io/',
        tokenPayload:{  "client_id":"xxxxxxxxxx",
                        "client_secret":"xxxxxxxxx",
                        "audience":"https://api.dev.io/",
                        "grant_type":"client_credentials"
                    }
    },

    prod:{
        baseURL:'https://api.prod.io/',
        tokenPayload:{  "client_id":"xxxxxxxxxxxxxx",
                        "client_secret":"xxxxxxxxxxxxxxxxxxx",
                        "audience":"https://api.prod.io/",
                        "grant_type":"client_credentials"}
    }



};

let env= process.env.ENV || 'stage';

const config={

    environment: env,
    baseURL: environments[env].baseURL


};
module.exports= config;


