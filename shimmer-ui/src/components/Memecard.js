import React from 'react'

const Memecard = ({author, url}) => {
    console.log(author, url);
  return (
    <div className = "p-4 border border-black flex flex-col justify-center rounded-lg ">
      <img alt = {author} src = {url} className = "w-48 h-48"/>
      <div className = "font-bold">{author}</div>
    </div>
  )
}

export default Memecard
