// 1st way to pass data from one component to another component
// function Props(props) {    
//     return (
//         <div>
//             <h1>Props in React JS</h1>
//             <h2>{props.city}</h2>
//         </div>
//     )
// }
// 2nd way to pass data from one component to another component
// function Props({ age }) {
//     return (
//         <div>
//             <h1>Props in React JS</h1>
//             <h2>{age}</h2>
//         </div>
//     )
// }
// multiple value pass
// function Props({ city, age }) {
//     return (
//         <div>
//             <h1>Props in React JS</h1>
//             <h2>City : {city}</h2>
//             <h2>Age : {age}</h2>
//         </div>
//     )
// }
// multiple object pass and print the data
function Props({ user }) {
    return (
        <div>
            <h1>Props in React JS</h1>
            <hr />
            <h2>User Name : {user.name}</h2>
            <h2>User Age : {user.age}</h2>
            <h2>User Email : {user.email}</h2>
        </div>
    )
}
export default Props