export default function(state, action){
    if(action.type === "incremented_age"){
        return{
            age:state.age+1
        }
    }else if(action.type === "decremeneted_age"){
        return{
            age:state.age-1
        }
    }else{
        return state
    }
}