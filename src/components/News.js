import PropTypes from 'prop-types';
import React, { Component } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from './NewsItem';
import Spinner from './Spinner';


export class News extends Component {

    static defaultProps = {
      country:'in',
      pageSize:5,
      category:'general'
    }

    static propTypes = {
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string
    }
  
    componentDidMount(){
       this.updateNews();

    }





    constructor(props){
        super(props);
        console.log("I am a constructor");
        this.state = {
           articles:[],
           loading:false,
           page:1,
           totalResults:0
        }
        document.title = `${this.props.category} - NewsMonkey`;
    }


    updateNews = async ()=>{
      this.props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      
      this.setState({
        articles:parsedData.articles,
        loading:false,
        totalResults:parsedData.totalResults
      });

      this.props.setProgress(100);

    }

    
    concatination = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      
      this.setState({
        articles:this.state.articles.concat(parsedData.articles),
        loading:false,
        totalResults:parsedData.totalResults
      });

     
    }


    fetchMoreData = ()=>{
      this.setState({
        page:this.state.page+1
      },this.concatination);

  }
    

  render() {

    return (
      <div className="container my-3 pt-5">
        <h2 className={`text-${this.props.mode==='light'?'dark':'light'}`} style={{textAlign:'center'}}>{`NewsMonkey - Top ${this.props.category} Headlines`}</h2>
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner />}
        >

        <div className="row">
        {!this.state.loading && this.state.articles && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}> <NewsItem  title={element.title!='null'?element.title:''} description={element.description!='null'?element.description:''} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author!=null?element.author:'unknown'} date={element.publishedAt} source={element.source.name} mode={this.props.mode}/></div> 
          
       
        })}

</div>

</InfiniteScroll>

     
       
        
      </div>
    )
  }
}

export default News
