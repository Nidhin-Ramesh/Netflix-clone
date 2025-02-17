import "./TitleCards.css";
import { useRef, useState } from "react";
import { useEffect } from "react";

const TitleCards = ({title,category}) => {
  const [apiData,setApiData]=useState([])
  const cardsRef=useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmIzODQxMjc5YjA1OWM0YWIzMTRjMWFmNGU2Y2RlMyIsIm5iZiI6MTczOTcyMDkxMS42OTYsInN1YiI6IjY3YjIwOGNmNGU4OWNjZDc4ODZkYmNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rFLPwlA5dHrL7SKVWRVSR9JKMOM9NGJ_D-jBTfA0E2A'
    }
  };
  
 
  const handleWheel=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft+=event.deltaY
  }

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel',handleWheel)
  },[])
  return <div className="title-cards">
    <h2 className="cards-title">{title?title:'Popular on Netflix'}</h2>
    <div className="card-list" ref={cardsRef}>
      {apiData.map((card,index)=>{
        return <div className="card" key={index}>
          <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="card image" />
          <p>{card.original_title}</p>
        </div>
      })}
    </div>
  </div>;
};

export default TitleCards;
