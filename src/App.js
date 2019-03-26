import React, { Component } from 'react';
import './App.css';
import News from './components/News';
import Comments from './components/Comments';

const myNews = [
  {
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    author: 'Max Frontend',
    text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru'
  }
];

class App extends Component {

  render() {
    return (
      <div>
        <News data={myNews}/>
        <Comments />
      </div>
    );
  }
}

export default App;
