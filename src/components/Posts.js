import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addPost , deletePost, editPost} from '../redux/postsSlice'
export default function Posts() {
   const [title,setTitle] = useState('')
   const [description,setDescription] = useState('')
   const [id,setId] = useState(null)

   const [updatedTitle,setUpdatedTitle] = useState('')
   const [updatedDescription,setUpdatedDescription] = useState('')

   const [isEdit, setEdit]= useState(false)

   const data = useSelector(state => state.posts.items)
   const dispatch = useDispatch()

  return (
    <div>
      <div className='form'>
      <input type="text" placeholder='Enter Post Title'  
      value={title}
         onChange={(e) => setTitle(e.target.value)}/>
      <input type="text" placeholder='Enter Post Description'
      value={description}
         onChange={(e) => setDescription(e.target.value)}
      />
       <button onClick={() =>{
        const id = data.length +1
         dispatch(addPost({id,title,description}))
       } }>Add Post</button>
      </div>

      <div className='posts'>
        {data.length > 0 ? data.map(post =>  <div key={post.id} className='post'>
         <h2>{post.title}</h2>
         <h5>{post.description}</h5>
         <button onClick={()=>{
                               setEdit(true) 
                               setId(post.id)
                               }}>Edit</button>
         <button onClick={()=> {
          dispatch(deletePost({id:post.id}))
         }}>Delete</button>
         <br/>

         {
          isEdit && id == post.id && (
            <>
              <input type='text' placeholder='Updated Title'
                onChange={(e)=>setUpdatedTitle(e.target.value)}
              />
              <input type='text' placeholder='Updated Description'
                 onChange={(e)=>setUpdatedDescription(e.target.value)}
              />
              <button onClick={()=> {
                dispatch(editPost({id:post.id,title:updatedTitle,description:updatedDescription}))
                setEdit(false)
                }}>Update</button>
            </>
          )
         }

         </div>)
         :
         'There is no posts'
         }
      </div>
    </div>
  )
}
