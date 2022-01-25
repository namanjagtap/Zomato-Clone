import React from "react"

export default function FamousFood(props){

    return(
        <div className="food">
            <div className="food--badge">{props.category}</div>
            <img src={props.img} className="food--img" alt="food" />
            <div className="food--details" >
                <div className="food--namerate">
                    <span className="food--title" >{props.title}</span>
                    <span className="food--rating" >{props.rating}★</span>
                </div>
                <div className="food--descPrice">
                    <span className="food--desc">{props.desc}</span>
                    <span className="food--price">{props.price} for one</span>
                </div>
            </div>
            <div className="food--line"></div>
        </div>
    )
}