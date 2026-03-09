import { useState } from "react"
function State() {
    const [fruit, setFruit] = useState("Apple");
    const handleFruit = () => {
        setFruit("Banana");
    }
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>State in React JS</h1>
            <h1>{fruit}</h1>
            <button onClick={handleFruit}>Change Fruit Name</button>
            <h1>Counter: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Update Counter</button>
        </div>
    )
}
export default State