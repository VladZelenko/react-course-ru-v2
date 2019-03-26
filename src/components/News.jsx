import React, { Component } from 'react';

class News extends React.Component {
    render() {
        const newsTemplate = this.props.data.map(function (item, index) {
            return (
                <div key={index}>
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