import "./Card.css";

import React,{useState} from 'react'

function Card() {
    const [images,setimage] = useState(["https://media.istockphoto.com/id/458126511/photo/playing-card-king-of-spades.jpg?s=170667a&w=0&k=20&c=fFvuoDrgZIc81PGoZB7mdqk9ztIQXrO0jyoUjMiaUSM=",
    "https://media.istockphoto.com/id/458126511/photo/playing-card-king-of-spades.jpg?s=170667a&w=0&k=20&c=fFvuoDrgZIc81PGoZB7mdqk9ztIQXrO0jyoUjMiaUSM=",
"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/1638px-Playing_card_spade_A.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_hehttps://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Playing_card_heart_3.svg/819px-Playing_card_heart_3.svg.pngart_A.svg/1200px-Playing_card_heart_A.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/1200px-Playing_card_spade_2.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Playing_card_heart_3.svg/819px-Playing_card_heart_3.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/1200px-Playing_card_spade_3.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Playing_card_heart_4.svg/819px-Playing_card_heart_4.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_heart_5.svg/819px-Playing_card_heart_5.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Playing_card_spade_6.svg/1200px-Playing_card_spade_6.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_heart_7.svg/1638px-Playing_card_heart_7.svg.png"
])


  return (
    <div className="card">  
    <img  className="image" src={images[Math.floor(Math.random() * images.length)]} alt="card image"/>
     </div>
  )
}

export default Card
