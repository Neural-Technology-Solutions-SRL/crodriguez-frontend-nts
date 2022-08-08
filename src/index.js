import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./components/TodoContainer"

ReactDOM.render(
    //This filter below, is for React to provide us with trigger checks and log a warning message at runtime
<React.StrictMode>
<TodoContainer />
</React.StrictMode>, 
document.getElementById("root")
)
