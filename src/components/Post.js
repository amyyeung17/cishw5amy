import React, { useState, useEffect } from 'react'
import s from 'styled-components'


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

const StyleBox = s.div`
  display:flex; 
  justify-content: center; 
  z-index: -10;
`
const P = s.div`
  width: 730px; 
  height: 100px;
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
const Po = s.div`
  width: 730px; 
  height: 350px;
  border: 2px solid lightgrey;
  border-radius: 5px;
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


const Post = ({ p }) => {
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const [state, setState] = useState('')
  const [posts, setPost] = useState(p)
  const [input, setInput] = useState(false)
  const [b, setB] = useState(false)
  const [n, setN] = useState('')
  const [reply, setReply] = useState('')
  const counter = 0


  const id = "id" + Math.random().toString(16).slice(2)

  useEffect(async () => {
    setPost(posts)
  }, [posts, b])
  
  useEffect(() => {
    const intervalID = setInterval(() => {}, 50)
    return ()=>clearInterval(intervalID)
  }, [])

  if(posts.length === 0) {

    return null
  } 



  return (
    <>
       <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
            <>
              <Po key={id.uniqueId} style={{height:'200px', marginTop:'10px'}}>
                <h2 style={{ fontFamily: 'Avenir', fontSize: '32px'}}>{posts[0]}</h2>
                <p style={{ fontFamily: 'Avenir', fontSize: '22px'}}>{posts[1]}</p>
              <Styledbutton
                style={{ backgroundColor: 'gray' }}
                onClick={() => {posts[5] = !posts[5]; setInput(!input)}}
              >
                reply
              </Styledbutton>
              <Styledbutton1 key={id.uniqueId} style={{position: 'relative', left:'499.5px', top: '-25px'}} 
                onClick={() => posts[3] -= 1}>  
                v
              </Styledbutton1>
              <Styledbutton1 key={id.uniqueId} style={{position: 'relative', left:'448.5px', top: '-120px'}}
                onClick={() => {posts[3] += 1}}> 
                ^
              </Styledbutton1>
              <p style={{ fontFamily: 'Avenir', fontSize: '22px', position:'relative', left: '646px', top:'-125px'}}>{posts[3]}</p>
            </Po>  
            </>
            {(posts[5] && posts[4].length < 3)?
              ( 
                <>
                  <Po key={p[0]} style={{ backgroundColor: 'lightgray', height:'190px' }}>
                    <Title placeholder="Name..." onChange={e => setN(e.target.value)} style={{height:'30px' }}/>
                    <Input placeholder="Write your reply here" onChange={e => setReply(e.target.value)} style={{height:'75px'}}/>
                    <Styledbutton
                      style={{ backgroundColor: 'gray' }}
                      onClick={() => (n !== '' && reply !== '' ? (posts[4].push([n, reply, 0, 0, [], false]), setInput(!input), setPost(posts[4]), posts[5] = !posts[5]) : '')}
                    >
                      comment
                    </Styledbutton>
                  </Po>
                </>
              )
              
              
              : null}
              
            
          </div>
    </>
    
  )
}

export default Post
