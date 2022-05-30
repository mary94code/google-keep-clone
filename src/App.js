import Header from "./components/Header/Header";
import TextArea from "./components/TextArea/TextArea";
import Todo from "./components/Todo/Todo";
import "../src/index.css";
import { useSelector } from "react-redux";

function App() {
    const { isChangedTheme, todos } = useSelector(state => state.todoReducer)
    const renderedTodos = todos.map((el, key) => <Todo data={el} key={key} />)

    return (
        <div style={{ backgroundColor: isChangedTheme ? '#202124' : 'white' }} className="App">
            <Header />
            <TextArea />
            <div className="container">
                <div className='container-2'>
                    {renderedTodos}
                </div>
            </div>
        </div>
    );
}

export default App;
