import React from 'react';

const Card = ({ name , email , id}) => {
    return(
        <div className = "bg-light-green  black dib br4 pa1 ma2 bw2 shadow-5 grow ">
            <img height = "200rem"src = {`https://robohash.org/${id}`} alt  = "Robots"/>
            <div className = "tc">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;