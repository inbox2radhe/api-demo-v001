const {request,expect,test}= require('@playwright/test')

let random_vin;

test.beforeAll('get random vin', async({request})=>{

        let randomVIN= await request.get('https://randomvin.com/getvin.php?type=fake');
        // let randomVIN= await request.get('https://vingenerator.org/');
        random_vin= (await randomVIN.text()).trim();
        console.log('VIN JSON==',random_vin);
        


});

test.describe.serial('Sequentails Execution', ()=>{

    let access_token;

    test('get access token',async({request})=>{

    
        let accessKeyJSON= await request.post('https://stg.com/oauth/token',{
             data:{
                 "client_id":"xxxxxx",
                 "client_secret":"xxxxxxxxx",
                 "audience":"https://api.stg.io/",
                 "grant_type":"client_credentials"
             },
             headers:{
                 "Accept":"application/json",
 
 
             }
         });
  
         let accesscallResponse= await accessKeyJSON.json();
 
         access_token=await accesscallResponse.access_token;
         console.log('Access Token==',access_token);
 
 })
 
 test('Renewal Order',async({request})=>{
 
 
         let jsonResponse= await request.post('https://api.stg.io/v1/mktorderrequests',
         {
             data:
             {
                 
                     "vinlocity_orders": [{
                             "document_upload_ids": [],
                             "vehicle": {
                                 "vin": `${random_vin}`,
                                 "fuel_type": "GAS",
                                 "license_plate_number": "DEFJAM6",
                                 "licence_plate_number_expiration_date": "11/04/25",
                                 "licence_plate_number_stateprovince_code": "KS",
                                 "license_plate_type": "TRAILER",
                                 "model_year": 2023,
                                 "make": "Land Rover Range Rover Sport",
                                 "model": "Land Rover Range Rover Sport P530 Autobiography",
                                 "vehicle_type":"4_DOOR",
                                 "odometer_in_miles": 20,
                                 "empty_weight":115,
                                 "gross_weight_rating": 4400,
                                 "registered_weight": 4400,
                                 "color": "White"
                             },
                             "title_and_registration": {
                                 "lessor_address": {
                                     "type": "NOT_APPLICABLE",
                                     "address_line_1": "8033 Flint St",
                                     "address_line_2": "",
                                     "city": "Lenexa",
                                     "county": "Johnson",
                                     "stateprovince_code": "KS",
                                     "country_code": "1",
                                     "postal_code": "66214"
                                 },
                                 "lessor_address_contact": {
                                     "contact": {
                                         "first_name": "Scott",
                                         "last_name": "Wilson"
                                     },
                                     "communication": {
                                         "email_addresses": [{
                                                 "type": "EMAIL_1",
                                                 "email_address": "jdoe@gmail.com"
                                             }
                                         ],
                                         "phone_numbers": [{
                                                 "type": "ASSISTANT",
                                                 "phone_number": "703-784-1547"
                                             }
                                         ]
                                     }
                                 },
                                 "work_type": "Renewal",
                                 "client_contacts": [{
                                         "contact": {
                                             "first_name": "Ross",
                                             "last_name": "Wilson"
                                         },
                                         "communication": {
                                             "email_addresses": [{
                                                     "type": "EMAIL_1",
                                                     "email_address": "jdoe@gmail.com"
                                                 }
                                             ],
                                             "phone_numbers": [{
                                                     "type": "ASSISTANT",
                                                     "phone_number": "703-784-1547"
                                                 },
                                                 {
                                                     "type": "ASSISTANT",
                                                     "phone_number": "703-784-1547"
                                                 }
                                             ]
                                         }
                                     }
                 
                                 ],
                                 "garaged_address_contacts": [{
                                         "contact": {
                                             "first_name": "Jane",
                                             "last_name": "Doe"
                                         },
                                         "communication": {
                                             "email_addresses": [{
                                                     "type": "EMAIL_1",
                                                     "email_address": "jdoe@gmail.com"
                                                 }
                                             ],
                                             "phone_numbers": [{
                                                     "type": "ASSISTANT",
                                                     "phone_number": "703-784-1547"
                                                 }
                                             ]
                                         }
                                     }
                                 ],
                                 "garaged_address": {
                                     "type": "REPO_YARD",
                                     "address_line_1": "660 S ELM ST",
                                     "address_line_2": "",
                                     "city": "GARDNER",
                                     "county": "JOHNSON",
                                     "stateprovince_code": "KS",
                                     "country_code": "1",
                                     "postal_code": "66030"
                                 },
                                 "mail_to_contacts": {
                                     "contact": {
                                         "first_name": "Jane",
                                         "last_name": "Doe"
                                     },
                                     "communication": {
                                         "email_addresses": [{
                                                 "type": "EMAIL_1",
                                                 "email_address": "jdoe@gmail.com"
                                             }
                                         ],
                                         "phone_numbers": [{
                                                 "type": "ASSISTANT",
                                                 "phone_number": "703-784-1547"
                                             }
                                         ]
                                     }
                                 },
                                 "mail_to_address": {
                                     "type": "NOT_APPLICABLE",
                                     "address_line_1": "201 N Ott Lane",
                                     "address_line_2": "",
                                     "city": "Gardner",
                                     "county": "Johnson",
                                     "stateprovince_code": "KS",
                                     "country_code": "1",
                                     "postal_code": "66030"
                                 },
                                 "vehicle_registration_address": {
                                     "type": "NOT_APPLICABLE",
                                     "address_line_1": "6900 Preston Road",
                                     "address_line_2": "",
                                     "city": "Plano",
                                     "county": "Collins",
                                     "stateprovince_code": "TX",
                                     "country_code": "1",
                                     "postal_code": "75024"
                                 },
                                 "requirements": "[{\"requirementId\":0,\"value\":\"Liberty\"},{\"requirementId\":1,\"value\":\"123TEst\"},{\"requirementId\":60,\"value\":\"09/28/1996\"},{\"requirementId\":355,\"value\":\"YES\"},{\"requirementId\":154,\"value\":\"x338209\"},{\"requirementId\":26,\"value\":\"218423\"},{\"requirementId\":8,\"value\":\"201 N Ott Lane Gardner, KS, 66030\"},{\"requirementId\":125,\"value\":\"987654321\"},{\"requirementId\":131,\"value\":\"201 N Ott Lane Gardner, KS, 66030\"},{\"requirementId\":187,\"value\":\"8/12/25\"},{\"requirementId\":23,\"value\":\"DTEST123-PLate\"},{\"requirementId\":10,\"value\":\"3733 POST OFFICE RD, ARLINGTON, VA, 22202\"},{\"requirementId\":649,\"value\":\"123-cunit\"}]",
                                 "is_expedited": false
                             },
                             "vehicle_registered_owners": [{
                                     // "registered_owner_company": {
                                     //     "type": "HUB",
                                     //     "name": "TEST ROOFING OF TEXAS LLC",
                                     //     "fein": "99-9999999"
                                     // },
                                     "registered_owner_person":{
                                         "first_name": "SDET",
                                         "last_name": "Singh"
                                     },
                                     "tax_exempt_id": "687412987",
                                     "insurance_policy_number": "687412421",
                                     "insurance_policy_effective_date": "2024-08-31",
                                     "insurance_policy_expiration_date": "2025-08-31",
                 
                                     "lien_holder_contacts": [{
                                             "contact": {
                                                 "first_name": "Jane",
                                                 "last_name": "Doe"
                                             },
                                             "communication": {
                                                 "email_addresses": [{
                                                         "type": "EMAIL_1",
                                                         "email_address": "jdoe@gmail.com"
                                                     }
                                                 ],
                                                 "phone_numbers": [{
                                                         "type": "ASSISTANT",
                                                         "phone_number": "703-784-1547"
                                                     }
                                                 ]
                                             }
                                         }
                                     ]
                                 }
                             ],
                 
                             "vehicle_registered_address": {
                                 "type": "NOT_APPLICABLE",
                                 "address_line_1": "107 Tamarack Ct",
                                 "address_line_2": "",
                                 "city": "Sterling",
                                 "county": "Loudoun",
                                 "stateprovince_code": "VA",
                                 "country_code": "1",
                                 "postal_code": "20164"
                             },
                             "vehicle_registered_owner_contacts": [{
                                     "contact": {
                                         "first_name": "Jane",
                                         "last_name": "Doe"
                                     },
                                     "communication": {
                                         "email_addresses": [{
                                                 "type": "EMAIL_1",
                                                 "email_address": "jdoe@gmail.com"
                                             }
                                         ],
                                         "phone_numbers": [{
                                                 "type": "ASSISTANT",
                                                 "phone_number": "703-784-1547"
                                             }
                                         ]
                                     }
                                 }
                             ],
                             "flex_fields": [],
                             "customer_reference_id": `TC-Order_{$randomInt}`
                         }
                     ]
             },
                 
             
             "headers":
             {
                 "Content-Type":"application/json",
                 "Authorization":`Bearer ${access_token}`
             }
 
 
 
         })
 
         let renewal_response= await jsonResponse.json();
         //let acertusOrder_Id= await renewal_response.acertus_order_id;
         console.log('Renewal JSON Response::',renewal_response);
         console.log("**********************************************");
         let acertusorder_ID= await renewal_response.vinlocity_orders[0].acertus_order_id;
         console.log("Acertus Order Id= ",acertusorder_ID)
         
         try{
            expect(jsonResponse.status()).toBe(201);
            console.log('Response Status code matching 201 Created');
         }catch(e){
            console.log('Response Status code not matching 201 Created');
            console.log(e);
         }
         try{
            expect(renewal_response.vinlocity_orders[0].vehicle.vin).toBe(`${random_vin}`);
            console.log('Response JSON VIN matching Request Payload VIN');
         }catch(e){
            console.log('Response JSON VIN not matching Request Payload VIN');
            console.log(e);
         }

 
 });

 test('Smoke Test',async({request})=>{
 
 
    let jsonResponse= await request.post('https://api.stg.io/v1/mktorderrequests',
    {
        data:
        {
            
                "vinlocity_orders": [{
                        "document_upload_ids": [],
                        "vehicle": {
                            "vin": `${random_vin}`,
                            "fuel_type": "GAS",
                            "license_plate_number": "DEFJAM6",
                            "licence_plate_number_expiration_date": "11/04/25",
                            "licence_plate_number_stateprovince_code": "KS",
                            "license_plate_type": "TRAILER",
                            "model_year": 2023,
                            "make": "Land Rover Range Rover Sport",
                            "model": "Land Rover Range Rover Sport P530 Autobiography",
                            "vehicle_type":"4_DOOR",
                            "odometer_in_miles": 20,
                            "empty_weight":115,
                            "gross_weight_rating": 4400,
                            "registered_weight": 4400,
                            "color": "White"
                        },
                        "title_and_registration": {
                            "lessor_address": {
                                "type": "NOT_APPLICABLE",
                                "address_line_1": "8033 Flint St",
                                "address_line_2": "",
                                "city": "Lenexa",
                                "county": "Johnson",
                                "stateprovince_code": "KS",
                                "country_code": "1",
                                "postal_code": "66214"
                            },
                            "lessor_address_contact": {
                                "contact": {
                                    "first_name": "Scott",
                                    "last_name": "Wilson"
                                },
                                "communication": {
                                    "email_addresses": [{
                                            "type": "EMAIL_1",
                                            "email_address": "jdoe@gmail.com"
                                        }
                                    ],
                                    "phone_numbers": [{
                                            "type": "ASSISTANT",
                                            "phone_number": "703-784-1547"
                                        }
                                    ]
                                }
                            },
                            "work_type": "Renewal",
                            "client_contacts": [{
                                    "contact": {
                                        "first_name": "Ross",
                                        "last_name": "Wilson"
                                    },
                                    "communication": {
                                        "email_addresses": [{
                                                "type": "EMAIL_1",
                                                "email_address": "jdoe@gmail.com"
                                            }
                                        ],
                                        "phone_numbers": [{
                                                "type": "ASSISTANT",
                                                "phone_number": "703-784-1547"
                                            },
                                            {
                                                "type": "ASSISTANT",
                                                "phone_number": "703-784-1547"
                                            }
                                        ]
                                    }
                                }
            
                            ],
                            "garaged_address_contacts": [{
                                    "contact": {
                                        "first_name": "Jane",
                                        "last_name": "Doe"
                                    },
                                    "communication": {
                                        "email_addresses": [{
                                                "type": "EMAIL_1",
                                                "email_address": "jdoe@gmail.com"
                                            }
                                        ],
                                        "phone_numbers": [{
                                                "type": "ASSISTANT",
                                                "phone_number": "703-784-1547"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "garaged_address": {
                                "type": "REPO_YARD",
                                "address_line_1": "660 S ELM ST",
                                "address_line_2": "",
                                "city": "GARDNER",
                                "county": "JOHNSON",
                                "stateprovince_code": "KS",
                                "country_code": "1",
                                "postal_code": "66030"
                            },
                            "mail_to_contacts": {
                                "contact": {
                                    "first_name": "Jane",
                                    "last_name": "Doe"
                                },
                                "communication": {
                                    "email_addresses": [{
                                            "type": "EMAIL_1",
                                            "email_address": "jdoe@gmail.com"
                                        }
                                    ],
                                    "phone_numbers": [{
                                            "type": "ASSISTANT",
                                            "phone_number": "703-784-1547"
                                        }
                                    ]
                                }
                            },
                            "mail_to_address": {
                                "type": "NOT_APPLICABLE",
                                "address_line_1": "201 N Ott Lane",
                                "address_line_2": "",
                                "city": "Gardner",
                                "county": "Johnson",
                                "stateprovince_code": "KS",
                                "country_code": "1",
                                "postal_code": "66030"
                            },
                            "vehicle_registration_address": {
                                "type": "NOT_APPLICABLE",
                                "address_line_1": "6900 Preston Road",
                                "address_line_2": "",
                                "city": "Plano",
                                "county": "Collins",
                                "stateprovince_code": "TX",
                                "country_code": "1",
                                "postal_code": "75024"
                            },
                            "requirements": "[{\"requirementId\":0,\"value\":\"Liberty\"},{\"requirementId\":1,\"value\":\"123TEst\"},{\"requirementId\":60,\"value\":\"09/28/1996\"},{\"requirementId\":355,\"value\":\"YES\"},{\"requirementId\":154,\"value\":\"x338209\"},{\"requirementId\":26,\"value\":\"218423\"},{\"requirementId\":8,\"value\":\"201 N Ott Lane Gardner, KS, 66030\"},{\"requirementId\":125,\"value\":\"987654321\"},{\"requirementId\":131,\"value\":\"201 N Ott Lane Gardner, KS, 66030\"},{\"requirementId\":187,\"value\":\"8/12/25\"},{\"requirementId\":23,\"value\":\"DTEST123-PLate\"},{\"requirementId\":10,\"value\":\"3733 POST OFFICE RD, ARLINGTON, VA, 22202\"},{\"requirementId\":649,\"value\":\"123-cunit\"}]",
                            "is_expedited": false
                        },
                        "vehicle_registered_owners": [{
                                // "registered_owner_company": {
                                //     "type": "HUB",
                                //     "name": "TEST ROOFING OF TEXAS LLC",
                                //     "fein": "99-9999999"
                                // },
                                "registered_owner_person":{
                                    "first_name": "SDET",
                                    "last_name": "Singh"
                                },
                                "tax_exempt_id": "687412987",
                                "insurance_policy_number": "687412421",
                                "insurance_policy_effective_date": "2024-08-31",
                                "insurance_policy_expiration_date": "2025-08-31",
            
                                "lien_holder_contacts": [{
                                        "contact": {
                                            "first_name": "Jane",
                                            "last_name": "Doe"
                                        },
                                        "communication": {
                                            "email_addresses": [{
                                                    "type": "EMAIL_1",
                                                    "email_address": "jdoe@gmail.com"
                                                }
                                            ],
                                            "phone_numbers": [{
                                                    "type": "ASSISTANT",
                                                    "phone_number": "703-784-1547"
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        ],
            
                        "vehicle_registered_address": {
                            "type": "NOT_APPLICABLE",
                            "address_line_1": "107 Tamarack Ct",
                            "address_line_2": "",
                            "city": "Sterling",
                            "county": "Loudoun",
                            "stateprovince_code": "VA",
                            "country_code": "1",
                            "postal_code": "20164"
                        },
                        "vehicle_registered_owner_contacts": [{
                                "contact": {
                                    "first_name": "Jane",
                                    "last_name": "Doe"
                                },
                                "communication": {
                                    "email_addresses": [{
                                            "type": "EMAIL_1",
                                            "email_address": "jdoe@gmail.com"
                                        }
                                    ],
                                    "phone_numbers": [{
                                            "type": "ASSISTANT",
                                            "phone_number": "703-784-1547"
                                        }
                                    ]
                                }
                            }
                        ],
                        "flex_fields": [],
                        "customer_reference_id": `TC-Order_{$randomInt}`
                    }
                ]
        },
            
        
        "headers":
        {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${access_token}`
        }



    })

    let renewal_response= await jsonResponse.json();
    //let acertusOrder_Id= await renewal_response.acertus_order_id;
    console.log('Renewal JSON Response::',renewal_response);
    console.log("**********************************************");
    let acertusorder_ID= await renewal_response.vinlocity_orders[0].acertus_order_id;
    console.log("Acertus Order Id= ",acertusorder_ID)
    
    try{
       expect(jsonResponse.status()).toBe(201);
       console.log('Response Status code matching 201 Created');
    }catch(e){
       console.log('Response Status code not matching 201 Created');
       console.log(e);
    }
    try{
       expect(renewal_response.vinlocity_orders[0].vehicle.vin).toBe(`${random_vin}`);
       console.log('Response JSON VIN matching Request Payload VIN');
    }catch(e){
       console.log('Response JSON VIN not matching Request Payload VIN');
       console.log(e);
    }


});

});

