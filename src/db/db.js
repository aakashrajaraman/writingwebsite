import axios from 'axios';


    const fetchData = async () => {
      
        const data = JSON.stringify({
          "collection": "shortstories",
          "database": "Documents",
          "dataSource": "writingcluster",
          "projection":{
            "title": "Roots of a Wandering Flower"
          }
        });
  
        const response = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-rvxaz/endpoint/data/v1/action/findOne', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': 'T8XS025QN7XuAdPtZWIq46QyEd5OslmW6mnSJapqyD22NM8A7sJI5IRSwaOf49IY',
            
          },
          body: data,
        });
  
        const responseData = await response.json();
        //setStory(responseData);
        return responseData;
     
    };
   let x =  fetchData();
   x.then(function(result){
     console.log(result);})

  
