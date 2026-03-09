function ToDo() {
    function callFun() {
        alert("function called")
    }
    const fruit = () => {
        alert("apple");
    }
    const apple = (name) => {
        alert(name)
    }
    return (
        <div>
            <h1>Anil Sidhu Todos</h1>
            <img src="https://picsum.photos/200/300" alt="Anil Sidhu" className="photo" />
            <ul>
                <li>List 1</li>
                <li>List 2</li>
                <li>List 3</li>
            </ul>
            <button onClick={callFun}>Click Me</button>
            <button onClick={fruit}>Click Me</button>
            <button onClick={() => apple("apple")}>Apple</button>
        </div>
    )
}
export default ToDo