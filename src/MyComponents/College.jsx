function College({ names }) {
    return (
        <div>
            <h1>Pass Props in Array</h1>
            <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2>
            <h2>{names[3]}</h2>
            <h2>{names[4]}</h2>
        </div>
    )
}
export default College