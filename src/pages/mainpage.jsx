import Header from "../components/header";
import "../styles/mainpage.css";
import {client} from "../db/db.js"
import { useEffect } from "react";

const Mainpage = (props) => {
    /*
    const [stories, setStories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                await client.connect();
                const db = client.db("writingwebsite");
                const storiesCollection = db.collection("shortstories");
                const stories = await storiesCollection.find({}).toArray();
                setStories(stories);
            }catch (error){
                console.log(error);
            }

        }
        fetchData();

    })*/





    return (
        <div class = "main">
            <div class = "line" style={{width: "1.5px", height: "100%", backgroundColor: "#ffffff", marginLeft: "75%", position:
        "absolute"}}>
        
        </div>
        <div class = "section">
            <img src = "./prop.jpeg" style = {{width: "30%", height: "30%", borderRadius: "10%",
        marginLeft:"30%", marginTop:"4%"}} alt = "image" />
            <p style={{marginLeft: "6%", paddingTop:"2%"}}>
                Hey! I'm Aakash.
                <br/><br/>
                I've been a writer ever since I was 12. Writing has always been a way for me to 
                pour out the complex thunderstorm of thoughts in my head. I'm really excited to share my work with you!
                <br/><br/>
                I primarily write poetry and short stories, but occasionally I'll wade my way into non-fiction.
                My work centers around existentialism, and what it means to be alive here and now. I hope you'll
                enjoy and/or feel perplexed!
                
                </p>
        </div>
        
            <div class = "one">
      
      
    <h1>testline</h1>
    
    

</div>

                

<Header />

        </div>
        
    )
}
export default Mainpage;