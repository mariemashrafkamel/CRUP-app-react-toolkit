import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: []
  },
  reducers: {
   
    addPost: (state, action) => {
      // console.log('action',action)
      state.items.push(action.payload)
      
    },
    editPost: (state, action) => {
      state.items.map(item =>{
        if(item.id == action.payload.id)
        {
          item.title = action.payload.title
          item.description = action.payload.description
        }
      })
     
    },
    deletePost: (state, action) => {
      console.log('action',action)
       state.items = state.items.filter(item => 
        item.id != action.payload.id
       )
    },
  }
})

// Action creators are generated for each case reducer function
export const {  addPost,deletePost,editPost } = postsSlice.actions

export default postsSlice.reducer