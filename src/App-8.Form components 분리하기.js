import React, {useState} from 'react';
import Lists from './components/Lists-7.components 분리하기';
import Form from './components/Form-8.Form컴포넌트 분리하기';

export default function App() {

const [ todoList, setTodoList ] = useState([]);

const [value, setValue] = useState("");

    const btnSubmit = (e) => {
        e.preventDefault();
        
        let newTodo = {
            id: Date.now(),
            title: value,
            completed:false
        }
        setTodoList(prev => [...prev, newTodo])
        setValue("");
    }

  return (
    <div className='container'>
        <div className="todoBlock">
            <div className="title">
                <h1>To Do List</h1>
            </div>
            <Lists todoList={todoList} setTodoList={setTodoList}/>
            <Form value={value} setValue={setValue} btnSubmit={btnSubmit}/>
        </div>
    
    </div>
    )
}