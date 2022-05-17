import './App.css';
import ReactFlow from "react-flow-renderer";

const initialElements = [
    {id: '1', type: 'input', data: {label: 'Node'}, position: {x: 0, y: 0}}
]

function App() {
    return (
        <div className="App">
            <ReactFlow elements={initialElements} style={{width: "100%", height: '90vh'}}/>
        </div>
    );
}

export default App;
