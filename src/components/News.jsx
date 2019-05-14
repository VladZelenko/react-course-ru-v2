import React, { Component } from 'react';

class News extends Component {
    state = {
        myNews: [
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
        ],
    }
    render() {
        const newsTemplate = this.state.myNews.map(function (item, index) {
            return (
                <div key={index} className="message">
                    <p className="news__author">{item.author}:</p>
                    <p className="news__text">{item.text}</p>
                </div>
            )
        })
        console.log(newsTemplate)
        return (
            <div className="news">
                {newsTemplate}
            </div>
        )
    }
}

export default News;