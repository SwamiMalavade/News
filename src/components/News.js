 import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

const News= (props)=> {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {      
        const something=async ()=>{
          let url= `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=7a0e795d9c40404dafe3431b3344d115&pageSize=${props.pageSize}`;
          let data= await fetch(url);
          let parsedData= await data.json();
          console.log(parsedData);
          setArticles(parsedData.articles);   
        } 
        something();
    }, [])

    const handlePrevious = async () => {
      let url= `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=7a0e795d9c40404dafe3431b3344d115&page=${page-1}&pageSize=${props.pageSize}`;
      setLoading(true);
        let data= await fetch(url);
        let parsedData= await data.json();
        console.log(parsedData);
        setPage(page-1);
        setArticles(parsedData.articles);
        setLoading(false);
    }

    const handleNext = async () => {
      let url= `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=7a0e795d9c40404dafe3431b3344d115&page=${page+1}&pageSize=${props.pageSize}`;
      setLoading(true);
        let data= await fetch(url);
        let parsedData= await data.json();
        console.log(parsedData);
        
        setPage(page+1);
        setArticles(parsedData.articles);
        setLoading(false);      
    }
    return (
      <div className='container my-3' style={{color:"white"}}>
        <h2>Top Headlines</h2>
        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-link" disabled={page<=1} onClick={handlePrevious}>&lArr; Previous</button>
          <button type="button" className="btn btn-link" onClick={handleNext}>Next &rArr;</button>
        </div>
        {loading && <Spinner />}
        <div className='row'>
        {articles.map((element)=>{
                return (
                    <div className='col-md-3 mx-4' key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0, 33):""} description={element.description?element.description.slice(0, 80):""} imgUrl={element.urlToImage} newsUrl={element.url}/> 
                    </div>                        
                )
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-link" disabled={page<=1} onClick={handlePrevious}>&lArr; Previous</button>
          <button type="button" className="btn btn-link" onClick={handleNext}>Next &rArr;</button>
        </div>
      </div>
    )

  }  
  News.defaultProps= {
    category: "general"
      }    

export default News