import React  from "react"

export default function Category(props){
    return(
        <section className="category">
            <img src={process.env.PUBLIC_URL + `/images/${props.img}`} className="category--img" alt="categoty" />
            <div className="category--title">{props.title}</div>
        </section>
    )
}