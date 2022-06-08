import React from 'react'
import './Meme.css'
import memesData from '../memesData'
export default function Meme(){
  const [meme,setMeme]=React.useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"

  })
  const [image,setImage]= React.useState(memesData)
  function memeImage(e){

  
    e.preventDefault();
const memesArray=memesData.data.memes;
const randomNumber=Math.floor(Math.random()*memesArray.length)
const url=memesArray[randomNumber].url
setMeme(prevMeme=>{
 return{
   ...prevMeme,randomImage:url
 }

})
  }
  function handle(event){
    event.preventDefault();
    const {name,value}= event.target;
    setMeme(prevMeme=>({
      ...prevMeme,[name]:value
    }))
  }
  return (
    <main className="meme">
      <form className="input">
        <div className="textbox">
        <input
       onChange={handle}
         type="text" 
        className="box" 
        placeholder="Top text"
        name="topText"
        value={meme.topText}/>
        <input type="text"
         className="box"
         name="bottomText"
         onChange={handle}
         value={meme.bottomText}
          placeholder="Bottom text"
          
          />
        </div>
        <div className="button">
        <button className="btn" onClick={memeImage}>Get a new meme image 🖼</button>
        </div>
      </form>
      <div className="page">
      <img src={meme.randomImage} className="memeImage"/>
      <h1 className="top" >{meme.topText}</h1>
      <h1 className="bottom">{meme.bottomText}</h1>
      </div>
    </main>
  )
}
