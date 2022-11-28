import React, { useEffect, useState } from 'react'
import { NavLink} from 'react-router-dom'
import {Header,Divider,  Item, Image } from 'semantic-ui-react'
import axios from 'axios'
import Loader from '../components/Loader'
import Message from '../components/Message'

const paragraph = <Image src='/images/wireframe/short-paragraph.png' />

const PostList = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData(){
      setLoading(true);
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/posts/');
        console.log(res.data);

        setPosts(res.data)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false) 
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      <Header> Postlist </Header>
      <Divider/>
      {error && <Message negative message={error}/>}
      {loading && <Loader/>}
      <Item.Group>
        {posts?.map(post => {
          return(
            <Item key={post.id}>
              <Item.Image size='small' src={post.thumbnail} />
    
              <Item.Content>
                <Item.Header as='a'>{post.title}</Item.Header>
                <Item.Description>{post.content}</Item.Description>
              </Item.Content>
          </Item>
          )
        })}
       

      </Item.Group>


    </div>
    
  )
}

export default PostList
// import React, { useEffect, useState} from 'react'
// import {Header} from 'semantic-ui-css'
// const PostList = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     fetch('http://127.0.0.1:8000/api/blog/posts')
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         setData(data);
//         setLoading(false);
//       })
//       .catch(err => {
//           setError(err.message);
//           setLoading(false);
//       })
//   }, [])

//   return (
//     <div>
//       <Header>PostList</Header> 
//       {error && (
//         <h4 style={{ color: "red"}}>An error occured failed to fetch</h4>
//       )}
//       {loading ? <div>Loading...</div>: (
//         <div>
//             {data && data.map(post => {
//               return(
//                   <div>
//                     <h3>{post.title}</h3>
//                     <h3>{post.content}</h3>
//                     <h3>{post.thumb}</h3>
//                   </div>
//               )
//             }
//             )}
//         </div>
//       )}
    
//     </div>
//   )
// }
// export default PostList