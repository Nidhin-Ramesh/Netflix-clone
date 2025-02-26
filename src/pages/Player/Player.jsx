import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Player = () => {
  const {id}=useParams();
  const navigate=useNavigate()
  const [apiData,setApiData]=useState({
    name:'',
    key:'',
    published_at:'',
    typeof:''
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmIzODQxMjc5YjA1OWM0YWIzMTRjMWFmNGU2Y2RlMyIsIm5iZiI6MTczOTcyMDkxMS42OTYsInN1YiI6IjY3YjIwOGNmNGU4OWNjZDc4ODZkYmNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rFLPwlA5dHrL7SKVWRVSR9JKMOM9NGJ_D-jBTfA0E2A'
    }
  };
  useEffect(()=>{fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));},[])
  
  return (
    <div className='player'>
      <img src={back_arrow_icon} onClick={()=>{navigate(-2)}} alt="" />
      <iframe
        width='90%' 
        height='90%' 
        src= {`http://www.youtube.com/embed/${apiData.key}`}
        title='trailer' 
        style={{ border: 'none' }}
      />
      <div className='player-info'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  )
}

export default Player
