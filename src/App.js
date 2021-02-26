import logo from './logo.svg';
import './App.css';
import Customer from './Components/Customer'
//import React, { Component } from 'react';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '방예랑',
  'birthday': '800518',
  'gender': '남자',
  'job': '대학생'
}, 
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/any',
  'name': '김은주',
  'birthday': '800518',
  'gender': '남자',
  'job': '대학생'
}, 
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/any',
  'name': '방민석',
  'birthday': '800518',
  'gender': '남자',
  'job': '대학생'
}
]

function App() {  
  return (
    <div>
      {
        customers.map(c=> {
          return (
          <Customer 
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}
          />
          )
        })
      }
    </div>
  );
}

// class App extends Component {
//   render () {
//     return (
//     <Customer 
//       name={customer.name}
//       birthday={customer.birthday}
//       gender={customer.gender}
//       job={customer.job}
//     />
//     );
//   }
//}

export default App;
