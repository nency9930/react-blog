import { useState } from "react"
function Toggle() {
    const [display, setDisplay] = useState(false);
    return (
        <div>
            <h1>Toggle in React JS</h1>
            {display ? <h1>Anil Sidhu</h1> : <h1>No User Name</h1>}
            <button onClick={() => setDisplay(!display)}>Toggle</button>
        </div>
    )
}
export default Toggle