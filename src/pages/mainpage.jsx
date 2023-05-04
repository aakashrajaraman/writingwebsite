import Header from "../components/header";
import "../styles/mainpage.css";

import { useEffect, useState } from "react";
import axios from "axios";



const Mainpage = () => {
    console.log("???? start");
    //const [Story, setStory] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            console.log("???? start");
            try {
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
                        //setStory(response.data);
                        console.log(JSON.stringify(response.data));

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [])

    return (
        <div class="main">
            <div class="line" style={{
                width: "1.5px", height: "100%", backgroundColor: "#ffffff", marginLeft: "75%", position:
                    "absolute"
            }}>

            </div>
            <div class="section">
                <img src="./prop.jpeg" style={{
                    width: "30%", height: "30%", borderRadius: "10%",
                    marginLeft: "30%", marginTop: "4%"
                }} alt="image" />
                <p style={{ marginLeft: "6%", paddingTop: "2%" }}>
                    Hey! I'm Aakash.
                    <br /><br />
                    I've been a writer ever since I was 12. Writing has always been a way for me to
                    pour out the complex thunderstorm of thoughts in my head. I'm really excited to share my work with you!
                    <br /><br />
                    I primarily write poetry and short stories, but occasionally I'll wade my way into non-fiction.
                    My work centers around existentialism, and what it means to be alive here and now. I hope you'll
                    enjoy and/or feel perplexed!

                </p>
            </div>

            <div class="one">
                <h1></h1>

                <h1>testline1</h1>
                <h1>testline</h1>
                <h1>testline</h1>
                <h1>testline</h1>
                <h1>testline</h1>
                <h1>testline</h1>
                <h1>testline</h1>
                <h1>testline</h1>
                <h1>testline</h1>
                <h1>testline</h1>
                <h1>testline</h1>
                <h1>testline</h1>
                <h1>testline</h1>
                <h1>testline</h1>
                <h1>testline</h1>
                <h1>testline</h1>


            </div>



            <Header />

        </div>

    )
}
export default Mainpage;