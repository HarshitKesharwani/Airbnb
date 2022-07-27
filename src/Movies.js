import React from "react";
export default function Movies(props)
{
    let badgetext
    if(props.openspots==0)
    badgetext="SOLD OUT"
    else 
    badgetext="ONLINE"
    return(
        <div className="movie">
           {badgetext && <div className="moviebadge">{badgetext}</div>}
            <img  className="movimg"src={props.mv.img}/>
            <h3 className="movhead">Name:{props.mv.name}</h3>
            <span className="rate">Rating:{props.mv.rating}</span>
        </div>
    )
}