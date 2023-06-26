import Header from "../components/header";
import "../styles/mainpage.css";
import { useState, useEffect } from 'react';


const Mainpage = () => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/document')
          .then(response => response.json())
          .then(data => {
            if (Array.isArray(data) && data.length > 0) {
              setTitle(data[0].title);
            }
          })
          .catch(error => console.error(error));
      }, []);

    return (
        <div className="main">
            <div className="line" style={{
                width: "1.5px", height: "100%", backgroundColor: "#ffffff", marginLeft: "75%", position:
                    "absolute"
            }}>

            </div>
            <div className="section">
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
                    enjoy and/or feel perplexed

                </p>
            </div>

            <div className="one">
                <h1></h1>

                <h1>{title}</h1>
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