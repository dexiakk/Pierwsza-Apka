'use client'
import Image from 'next/image'
import { useState, useEffect } from "react";

export default function AnimeGirlImage() {
const [animeImage, setImage] = useState("");
useEffect(() => {
    fetch('https://api.waifu.im/search')
    .then(odpowiedz => odpowiedz.json())
    .then(data => setImage(data.images.shift().url))
},[])
  
return (
    <img src={animeImage} alt='Losowy obrazek Anime Dziewczynki' className='lg:h-48 lg:w-48 md:h-32 md:w-32 hover:brightness-50 mx-auto'/>
)
}
