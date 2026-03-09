function User({ data }) {
    return (
        <div style={{
            border: '1px solid red',
            borderRadius: '10px',
            padding: '10px',
            margin: '10px',
            width: '400px'
        }}>
            <h3>Id: {data.id}</h3>
            <h3>Name: {data.name}</h3>
            <h3>Age: {data.age}</h3>
            <h3>Email: {data.email}</h3>
        </div >
    )
}
export default User