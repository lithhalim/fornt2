

const addToHistory=(state,action)=>{
    return{
        count:state.count+=1,
        history:[...state.history,action.payload],
    }
}

const RemoveFromHistory=(state,action)=>{
    return{
        count:state.count-=1,
        history:state.history.filter((a,i)=>(a.id!=action.payload.ItemDeleteId))
    }
}
const ClearHistory=()=>{
    return{
        count:0,
        history:[]
    }
}

export {
    addToHistory,
    RemoveFromHistory,
    ClearHistory
}