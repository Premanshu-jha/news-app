import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source,mode} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: '18rem'}} data-bs-theme={mode}>
  <img src={imageUrl!=null?imageUrl:'https://images.moneycontrol.com/static-mcnews/2024/04/vodafone-770x433.jpg'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    <span class="visually-hidden">unread messages</span>
  </span>

    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className={`btn btn-sm btn-${mode==='dark'?'primary':'dark'}`}>Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
