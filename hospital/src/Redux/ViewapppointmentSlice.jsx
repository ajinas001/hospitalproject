import {createAsyncThunk, createSlice} from  "@reduxjs/toolkit"


const GET_POST_URL = "http://localhost:4000/save/view-appointment "

const initialState  = {
     post : [],
     successfull:'',
     error:'',
    
     
}



export const sendPost = createAsyncThunk('view-appointment/send-post',async(obj)=>{
    fetch('http://localhost:4000/save/view-appointment',{
        method:'POST',
        body:JSON.stringify(obj),
            

    })
   
    .then((response)=>response.json())
    .then((json) => console.log(json));
})


const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(sendPost.pending,(state)=>{
            state.loading=true;
        })
        .addCase(sendPost.fulfilled,(state, action)=>{
            state.loading=false;
            state.post=action.payload
        })
        .addCase(sendPost.rejected,(state, action)=>{
            state.loading=false;
            state.error=action.error.message
        })

    }
})

export default postSlice.reducer ;
