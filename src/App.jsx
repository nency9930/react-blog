import Careers from "./MyComponents/Careers";
import College from "./MyComponents/College";
import Props from "./MyComponents/Props";
import State from "./MyComponents/State";
import Testimonials from "./MyComponents/Testimonials";
import ToDo from "./MyComponents/ToDo";
import Toggle from "./MyComponents/Toggle";
import User from './MyComponents/User';
import Login, { Profile, Setting } from "./MyComponents/UserComponent"
import BrowserRouter from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
function App() {
  const name = "Nency Kanani";
  let a = 10;
  let b = 10;
  function fruit() {
    return 'Apple';
  }
  function sum(a, b) {
    return a + b;
  }
  function operation(a, b, op) {
    if (op == "+") {
      return a + b;
    }
    else if (op == "-") {
      return a - b;
    }
    else {
      return a * b;
    }
  }
  const userObj = {
    name: "Nency",
    age: 22,
    email: "nencykanani0@gmail.com"
  }
  const userObj2 = {
    name: "Hasti",
    age: 21,
    email: "hasti@gmail.com"
  }
  const userObj3 = {
    name: "Krisha",
    age: 23,
    email: "krisha1@gmail.com"
  }
  const userArray = ['abc', 'xyz', 'pqr'];
  let path = "https://picsum.photos/200/300";
  let city = "surat"
  let age = 22
  let collegeNames = ['IET', 'DU', 'IIT', 'NIT', 'MIT'];
  // array of object
  const userData = [
    {
      id: 1,
      name: 'nency',
      age: 22,
      email: 'nency@gmail.com'
    },
    {
      id: 2,
      name: 'hasti',
      age: 21,
      email: 'hasti@gmail.com'
    },
    {
      id: 3,
      name: 'abc',
      age: 18,
      email: 'abc@gmail.com'
    },
    {
      id: 4,
      name: 'pqr',
      age: 20,
      email: 'pqr@gmail.com'
    }
  ]

  return (
    <BrowserRouter>
      <div>
        <Login />
        <Profile />
        <Setting />
        <h1>Hello {name ? name : "user not found"}</h1>
        <h1>{10 + 10 + 10}</h1>
        <h1>{a * b}</h1>
        <h1>{fruit()}</h1>
        <h1>{sum(10, 20)}</h1>
        <h1>{operation(1, 1, "+")}</h1>
        <button onClick={() => alert("hello")}>Click</button>
        <h1>{userObj.name}</h1>
        <h1>{userObj.age}</h1>
        <h1>{userObj.email}</h1>
        <h1>{userArray[0]}</h1>
        <img src={path} />
        {/* <input type="text" value={name} id={name} /> */}
        <ToDo />
        <State />
        <Toggle />
        {/* <Props city="surat" age={29} /> */}
        {/* <Props city={city} age={age} /> */}
        <Props user={userObj} />
        <Props user={userObj2} />
        <Props user={userObj3} />
        <College names={collegeNames} />
        <h1>Loop in JSX with Map Function</h1>
        <h2>Dynamic Data</h2>
        <table border="1">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Age</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {
              userData.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <h2>Dummy Data</h2>
        <table border="1">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Age</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>nency</td>
              <td>22</td>
              <td>nency@gmail.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>hasti</td>
              <td>21</td>
              <td>hasti@gmail.com</td>
            </tr>
            <tr>
              <td>3</td>
              <td>abc</td>
              <td>18</td>
              <td>abc@gmail.com</td>
            </tr>
            <tr>
              <td>4</td>
              <td>pqr</td>
              <td>20</td>
              <td>pqr@gmail.com</td>
            </tr>
          </tbody>
        </table>
        <h1>Pass data throught Loop in Component using Props</h1>
        {
          userData.map((user) => (
            <div key={user.id}>
              <User data={user} />
            </div>
          ))
        }
        <Testimonials />
        <Careers />


























      </div>
    </BrowserRouter>
  )
}
export default App  