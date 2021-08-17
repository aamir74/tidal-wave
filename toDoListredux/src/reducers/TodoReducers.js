export const TodoReducer = (state = { todos: [] }, action) => {
    console.log(state,'Aamir')
    switch (action.type) {
        case "ADD_TODO":
            return { todos: action.payload }

        case "REMOVE_TODO":
            return { todos: action.payload }

        default:
            return state
    }
}

