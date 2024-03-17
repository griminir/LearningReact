// //props/properites allows us to communicate from a parent to child component
// const User = (props) => {
//   console.log(props);
//   return (
//     <section>
//       <img src={props.img} alt={props.name} />
//       <h1>Name: {props.name}</h1>
//       <h3>Hobbies:{props.hobbies}</h3>
//     </section>
//   );
// };

//destructuring
const User = ({ img, name, hobbies, children }) => {
  return (
    <section>
      <img src={img} alt={name} />
      <h1>Name: {name}</h1>
      <h3>Hobbies:{hobbies}</h3>
      {children}
    </section>
  );
};

export default User;
