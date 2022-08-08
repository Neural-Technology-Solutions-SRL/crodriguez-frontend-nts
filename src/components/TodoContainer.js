import React from "react"
import TodosList from "./TodosList";
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
    //This is an objects array with the a component state "Its a way to pass the data to other componets file".
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Setup development environment",
                completed: true
            },
            {
                id: uuidv4(), 
                title: "Develop website and add content",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Deploy to live server",
                completed: false
            }
        ]
    };

    handleChange = id => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            }),
        }))
    };
    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    };
    addTodoItem = title => {
        const newTodo = {
            id: 4,
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };
    render() {
        return (
            //Now have the state data in the todos prop. Thanks to the line below.
            <div>
                <Header />
                <InputTodo addTodoProps={this.addTodoItem} />
                <TodosList 
                todos={this.state.todos} 
                handleChangeProps={this.handleChange}
                deleteTodoProps={this.delTodo} 
                />
            </div>
        );
    }
}
export default TodoContainer