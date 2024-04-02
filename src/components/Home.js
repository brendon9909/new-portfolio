import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1712066144014.json";

export default function Home(){
    return(
        <div className="home">
            <p className="about">Bringing pixels to life<br/> with a <span style={{fontFamily: "Rubik Scribble"}}>keyboard</span> and<br/> a sprinkle of <span style={{fontFamily: "Rubik Scribble"}}>imagination</span>.</p>
            <Lottie className="myGif" animationData={animationData}/>
        </div>
    )
}