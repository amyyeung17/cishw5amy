import React, { useState, useEffect } from 'react'
import s from 'styled-components'
import Post from './Post'

const Styledbutton = s.button`
  width: 17.5%;
  height: 15%;
  font-size: 16px;
  border-width: 0px;
  border-radius: 5px;
  right: 25px;
  background-color: rgb(13, 95, 248);
  color:white;
  font-family:Avenir;
  font-size:20px;
  font-weight: 450;
`

const Styledbutton1 = s.button`
  width: 7%;
  height: 15%;
  font-size: 16px;
  border-width: 0px;
  border-radius: 5px;
  right: 25px;
  background-color: rgb(13, 95, 248);
  color:white;
  font-family:Avenir;
  font-size:20px;
  font-weight: 450;
`

const StyleBox = s.div`
  display:flex; 
  justify-content: center; 
  z-index: -10;
`
const Po = s.div`
  width: 730px; 
  height: 350px;
  border: 2px solid lightgrey;
  border-radius: 5px;
`

const Input = s.textarea`
  height: 125px;
  width: 670px;
  border: 2px solid lightgrey;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 15px;
  font-family: Avenir;
  font-size: 22px;
  border-radius: 5px;
`
const Title = s.input`
  height: 40px; 
  width: 670px;
  fontSize: 28px; 
  border: 2px solid lightgrey;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 15px;
  font-family: Avenir;
  font-size: 28px;
  border-radius: 5px;
`

const Arrow =s.button`
  border: solid salmon;
  border-width: 0 7px 7px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  z-index: 3;
`

const recursive = ({p}) => {
  return(
    <>
    {p !== undefined && p.length !== 0 && p.map(p => {
      return(
      <Post p={p}/>
      )
    })}
    </>
  )
}

const App = () => {
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const [state, setState] = useState('')
  const [p, setP] = useState([])
  const [input, setInput] = useState(false)
  const [c, setC] = useState([])
  const [reply, setReply] = useState('')
 



  return (
    <>
      <h1 style={{
        fontFamily: 'Avenir-Black', fontSize: '38px', marginTop: '40px', justifyContent: 'center', display: 'flex',
      }}
      >
        🎉 My Community🎉
      </h1>
      <StyleBox>
        <Po>
          <h3 style={{
            fontFamily: 'Avenir-Black', fontSize: '32px', marginLeft: '25px', marginBottom: '0px',
          }}
          >
            New Post
          </h3>
          <Title placeholder="Name...." onChange={e => setName(e.target.value)} />
          <Input placeholder="Start typing here....." onChange={e => setText(e.target.value)} />
          <Styledbutton
            style={{ position: 'relative', left: '80%', marginTop: '2.5px' }}
            onClick={() => (name !== '' && text !== '' ? (p.push([name, text, likes, dislikes, [], false]), setP(p), setC(!c)) : '')}
          >
            Submit
          </Styledbutton>
        </Po>
      </StyleBox>
    {recursive({p})}
    </>
  )
}
export default App
