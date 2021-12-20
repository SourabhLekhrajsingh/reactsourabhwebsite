import React from 'react'

export const Newindex = (props) => {
    return (
        <>
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="myPic" className="card__img"/>
                <div className="card__info">
                    <span className="card__title">{props.title }</span>
                    <h3 className="card__category"> a netflix series</h3>
                    <a href="" target="_blank">
                    <button>watch </button>
                    </a>
                </div>
            </div>
        </div>   
        </>
    )
}
export default Newindex;
