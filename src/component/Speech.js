import React from "react";
import "./Speech.css";
import Recognition from "./Recognition";

function Speech(){
    return(
        <div className="speech">
            <div className="wrd">
<h3>CLAY:</h3>
            </div>
            <div className="desc">
<p>Clay is a soft, loose,earthy material containing <br></br>
    particles NOW lets learn the spelling of CLAY:
    <br></br>
    <br></br>
    It is spelled as : C L A Y 
    <br></br>
    <br></br>
    Try to spell it:
</p>
            </div>
            <div className="com">
                <Recognition/>
            </div>

        </div>
    )
}

export default Speech;