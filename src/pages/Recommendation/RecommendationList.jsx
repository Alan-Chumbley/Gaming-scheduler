import React from 'react'
import Recommendation from './Recommendation'
import RecommendationItem from './RecommendationItem'


export default function RecAuto(recs) {
  // loop through recommendations to 
    recs.map(recs =>{
      return <RecommendationItem key={recs.id} rec={recs}

    })
    <div>RecAuto</div>
  )
}
