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

//conditonal rendering
const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({ isValid }) => {
  if (isValid) {
    return <ValidPassword />;
  } else {
    return <InvalidPassword />;
  }
};

function App() {
  return (
    <>
      <Password isValid={true} />
    </>
  );
}

export default App;
