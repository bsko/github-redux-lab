const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    time: new Date(),
                    done: 0
                }
            ];
        case 'COMPLETE_TODO':
            return state.map(todo => {
                if (todo.text === action.text) {
                    const beginTime= todo.time.getTime();
                    const endTime = new Date().getTime();
                    const result = (endTime - beginTime) / 1000;
                    return {
                        ...todo,
                        done: 1,
                        estimated: `${result} sec`
                    };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

export default todos;
