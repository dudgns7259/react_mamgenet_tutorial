import React, { Component } from 'react';
import Customer from './component/Customer';
import './App.css';

const customer = [{
   'id' : 1,
   'image' : 'https://placeimg.com/64/64/1',
   'name' : '홍길동',
   'birthday' : '961122',
   'gender' : '남자',
   'job' : '대학생'
},
{  'id' : 2,
   'image' : 'https://placeimg.com/64/64/2',
   'name' : '홍길순',
   'birthday' : '961020',
   'gender' : '여자',
   'job' : '교수'
},
{  'id' : 3,
   'image' : 'https://placeimg.com/64/64/3',
   'name' : '홍길자',
   'birthday' : '960909',
   'gender' : '여자',
   'job' : '선생님'
}
];

class App extends Component {
 render() {
    return (
       <div>
          {
             customer.map(c => {
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
    )
 }
}

export default App;
