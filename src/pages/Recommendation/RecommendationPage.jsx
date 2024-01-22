import React from 'react'
import GameCard from '../../components/GameCard/GameCard';
// import { RecommendSearch } from './RecommendSearch'; 
export default function RecommendationPage(props) {
  return (
    <>
    <div>
    <h1 className='font-main text-red text-center mt-10 pageTitle'>
        Your Genre Games Recommendations
      </h1>
      <div className='overlay'></div>
    </div>

    <div className='card'> 
    <div className='img-container'>
      <GameCard />
      {/*unsure what goes where*/}
    <img alt={props.name} src={props.image} />
      </div>
    <strong> {props.slug} </strong>
    <p> {props.description_raw}</p>
        

    </div> 



    </>
  )
}
