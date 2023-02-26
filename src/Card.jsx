import React from "react";

const Card = (props) => {
    const{Name,email,Id}=props;
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt = "" src={`https://robohash.org/${Id}`}width={200}height={200}/>
            <div>
                <h2>{Name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;