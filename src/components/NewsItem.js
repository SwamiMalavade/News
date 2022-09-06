import React from 'react'


const NewsItem= (props)=> {
        let {title, description, imgUrl, newsUrl}= props;
        return (
            <div className='my-3'>
                <div className="card" style={{color:"white", backgroundColor:"#3065a3", width: "19rem"}}>
                    <img src={imgUrl?imgUrl:"https://i.pinimg.com/originals/58/e8/13/58e8130524865a37c9412e3207e07983.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} className="btn btn-sm btn-dark">Know more...</a>
                    </div>
                </div>
            </div>
        )
    }


export default NewsItem
 

