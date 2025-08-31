import { useState } from "react";

export default function LikeButton() {
        let [islike, setislike] = useState(false);
        let [clicks, setclicks] = useState(0);
        let togglelike = () => {
            setislike(!islike);
            setclicks(clicks+1);
        } 

        let likestyle = {color:"red"};
    return (
        <div>
            <p>clicks = {clicks}</p>
           <p onClick={togglelike}>
            {
                islike ? (<i class="fa-solid fa-heart" style={likestyle}></i>) : (<i className="fa-regular fa-heart"></i>)
            }
           </p>
        </div>
        
    )
}