import React from "react"

export default function Collection(props){
    return(
        <div>
            <div className="collection--item">
                <img src={`../images/${props.img}`} className="collection-img" alt="collection" />
                <div className="collection--detail">
                    <p className="collection-name">{props.title}</p>
                    <p className="collection-place">{props.places} places 🢒</p>
                </div>
            </div>
        </div>
    )
}