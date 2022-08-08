import React from "react"
import TodosList from "./TodosList";
import Header from "./Header"

class TodoContainer extends React.Component {
    //This is an objects array with the a component state "Its a way to pass the data to other componets file".
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2, 
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    };

    render() {
        return (
            //Now have the state data in the todos prop. Thanks to the line below.
            <div>
                <Header />
                <TodosList todos={this.state.todos} />
            </div>
        );
    }
}
export default TodoContainer