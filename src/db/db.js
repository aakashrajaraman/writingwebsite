import axios from 'axios';
import { useState } from 'react';


console.log("???? start");
var data = JSON.stringify({
    "collection": "shortstories",
    "database": "Documents",
    "dataSource": "writingcluster",
    
});

var config = {
    method: 'post',
    url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-rvxaz/endpoint/data/v1/action/findOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'T8XS025QN7XuAdPtZWIq46QyEd5OslmW6mnSJapqyD22NM8A7sJI5IRSwaOf49IY',
    },
    data: data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        
    })
    .catch(function (error) {
        console.log(error);
    });
