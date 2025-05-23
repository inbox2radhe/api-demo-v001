const environments={

    stage:{

        token_baseURL:'https://stg.com/oauth/token'

    },

    custDev:{
        token_baseURL:'https://dev.com/oauth/token'
    },

    prod:{
        token_baseURL:'https://prod.com/oauth/token'
    }



};

let env= process.env.ENV || 'stage';
console.log('Environemt value from config.js file',env)
const token_config={

    environment: env,
    token_baseURL: environments[env].token_baseURL
    
    
};
module.exports= token_config;