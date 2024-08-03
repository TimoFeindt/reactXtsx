type TodoListProp = [{
    todos: {
        id: string,
        text: string
    }
}]

export default function ToDoList({
    toDoList
}
) {    

    return(
        <>
            <ul>
                {toDoList.map((todo) => {
                    return <li key={todo.id}>{todo.text}</li>
                })}
            </ul>
        </>
    )
}