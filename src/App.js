// import { Component } from 'react'; //needed for class based component

// //class based component in react
// class App extends Component {
//   // or you can use React.Component and not import
//   //render allows us to show content on the screen
//   render() {
//     return <h1>using class based component</h1>;
//   }
// }

// //functional component in react syntax
// function App() {
//   return (
//     // if you wanna have more elements in a functional component you need to hava a parent element
//     <section>
//       {/* className is the same as class in regular html */}
//       <h1 className=''>this is functional component</h1>
//       <p>
//         in this case the section is the parent element for h1 and p elements
//       </p>
//       <form>
//         {/* you need to use htmlFor because in JS for = a loop */}
//         <label htmlFor='name'>name</label>
//         <input type='text' id='name' />
//       </form>
//     </section>
//   );
// }

// import Add from './components/Add';
// import Greetings from './components/Greetings';

// function App() {
//   return (
//     // you can wrap things in fragments <> *stuff you want* </>
//     <>
//       <Add />
//       <Greetings />
//     </>
//   );
// }

// // variables in react
// function App() {
//   const myName = 'viktor';
//   const multiply = (a, b) => a * b;
//   const specialClass = 'whatever-css-class';

//   return (
//     <>
//       <h1>{myName}</h1>
//       <p>2 + 2 = {2 + 2}</p>
//       <p>list of names {['alex', 'james', 'timmy']}</p>
//       <p>4 * 4 = {multiply(4, 4)}</p>
//       <p className={specialClass}>this is a special class</p>
//     </>
//   );
// }

// function App() {
//   //example #1 array's
//   const numbers = [1, 2, 3, 4, 5];

//   return (
//     <>
//       {numbers.map((number) => (
//         //math.random is not the best way to handle this but it works for now
//         <ul key={Math.random() * 10}>
//           <li>{number}</li>
//         </ul>
//       ))}
//     </>
//   );
// }

// function App() {
//   //exampel 2 array's
//   const userInfo = [
//     {
//       username: 'grimnir',
//       email: 'test@gmail.com',
//       location: 'NO',
//     },
//     {
//       username: 'oskar',
//       email: 'test2@gmail.com',
//       location: 'UK',
//     },
//     {
//       username: 'timmy',
//       email: 'test3@gmail.com',
//       location: 'US',
//     },
//   ];

//   return (
//     <>
//       {userInfo.map((user) => (
//         <ul key={Math.random() * 10}>
//           <li>{user.username}</li>
//           <li>{user.email}</li>
//           <li>{user.location}</li>
//         </ul>
//       ))}
//     </>
//   );
// }

// //props check components/User
// import User from './components/User';
// function App() {
//   return (
//     <>
//       <User
//         name='viktor'
//         img='https://i.pinimg.com/originals/76/94/bd/7694bd7519adc697cd43ff19e9588894.jpg'
//         age={18}
//         hobbies={['Coding', 'Gaming', 'Sleeping']}
//       >
//         <p>
//           keyword called children is the special name for jsx nested inside a
//           component
//         </p>
//       </User>
//     </>
//   );
// }

// //conditonal rendering
// const ValidPassword = () => <h1>Valid Password</h1>;
// const InvalidPassword = () => <h1>Invalid Password</h1>;

// const Password = ({ isValid }) => {
//   if (isValid) {
//     return <ValidPassword />;
//   } else {
//     return <InvalidPassword />;
//   }
// };

// function App() {
//   return (
//     <>
//       <Password isValid={true} />
//     </>
//   );
// }

// //&& operator
// const Cart = () => {
//   const items = ['Wireless Earbuds', 'Power Bank', 'Expensive MTG Card'];

//   return (
//     <>
//       <h1>Cart 🛒</h1>

//       {items.length > 0 && <h2>You have {items.length} items in cart</h2>}

//       <ul>
//         <h4>👇 Products</h4>
//         {items.map((item) => (
//           <li key={Math.random()}>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// function App() {
//   return (
//     <>
//       <Cart />
//     </>
//   );
// }

// //styling inline not reccomended
// function App() {
//   return (
//     <>
//       <h1 style={{ color: 'steelblue', backgroundColor: '#ccc' }}>
//         Hello I am React
//       </h1>
//     </>
//   );
// }

// //styling via inline variabel not recomended
// const style1 = {
//   color: 'teal',
//   backgroundColor: 'crimson',
// };

// function App() {
//   return (
//     <>
//       <h1
//         style={{ color: style1.color, backgroundColor: style1.backgroundColor }}
//       >
//         Hello I am React
//       </h1>
//     </>
//   );
// }

// //styling via other file
// //extention is important
// import './index.css';

// function App() {
//   return (
//     <>
//       <h1>Hello I am React</h1>
//     </>
//   );
// }

// //needed for react bootstrap also check index.js file for what is needed in there
// // npm install react-bootstrap bootstrap
// import Button from 'react-bootstrap/Button';

// function Buttons() {
//   return (
//     <>
//       <Button variant='outline-primary'>Primary</Button>
//       <Button variant='outline-secondary'>Secondary</Button>
//       <Button variant='outline-success'>Success</Button>
//       <Button variant='outline-warning'>Warning</Button>
//       <Button variant='outline-danger'>Danger</Button>
//       <Button variant='outline-info'>Info</Button>
//       <Button variant='outline-light'>Light</Button>
//       <Button variant='outline-dark'>Dark</Button>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <h1>Hello I am React</h1>
//       <Buttons />
//     </>
//   );
// }

// //styling with tailwind css
// //install: npm install -D tailwindcss
// //add to project: npx tailwindcss init
// //index2.css needed for tailwind css same with tailwind.config.js
// //check index.js for more
// function App() {
//   return (
//     <>
//       <h1>Hello I am React</h1>
//       <h1 class='text-orange-800 text-3xl font-bold underline'>Hello world!</h1>
//     </>
//   );
// }

// //react icons go to react-icons and find the one you like
// //npm install react-icons --save
// import { BsFillCartCheckFill } from 'react-icons/bs';

// function App() {
//   return (
//     <>
//       <BsFillCartCheckFill />
//     </>
//   );
// }

//events inline events with params
const handleClick = (a, b) => {
  console.log(a, b);
};

const Button = () => {
  return <button onClick={() => handleClick('hell', 'no')}>Touch me</button>;
};

function App() {
  return (
    <>
      <Button />
    </>
  );
}
export default App;
