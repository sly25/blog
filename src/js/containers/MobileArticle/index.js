import React from 'react';
import { Link } from 'react-router-dom';

import './style.less';

import PCRequest from '../PCArticle/PCRequest';

import { get } from '../../fetch/get';

export default class MobileArticle extends React.Component{
    constructor(){
        super();
        this.state = {
            allType : [],
            data : [],
            page : 1,
        };
    }
    componentDidMount(){
        get('/api/editArticle/classify').then( res => {
            this.setState({
                allType : JSON.parse(res)
            });
        })
        get(`/api/article/content/${this.state.page}`).then( res => {
            this.setState({
                data : JSON.parse(res)
            });
        })
    }
    showOneType(e){
        // console.log(e.target.innerText);
        get(`/api/classify/content/${e.target.innerText}`).then( res => {
            this.setState({
                data : JSON.parse(res)
            });
        })
    }
    handlePageChange(){
        this.setState({
            page : this.state.page+1,
        },() => {
            get(`/api/article/content/${this.state.page}`).then( res => {
                this.setState({
                    data : this.state.data.concat(JSON.parse(res))
                });
            });
        });
    }
    // addHover(event){
    //     let cname = event.target.getAttribute('class') + ' hover';
    //     event.target.setAttribute('class',cname);
    //
    // }
    // removerHover(event){
    //     let cname = event.target.getAttribute('class').slice(0,14);
    //     event.target.setAttribute('class',cname);
    // }
    render(){
        const { allType,data } = this.state;
        const list = allType.length ?
            allType.map((item,index) => (
                <div key={index}>
                <div className={`categoryitems item${index+1}`}></div>
                <div onClick={this.showOneType.bind(this)} className={`zhezhaoceng z${index+1}`} ><p>{item}</p></div>
                </div>
            )) :
            '没有任何分类';
        const article = data.length ?
            data.map((item,index) => (
                <PCRequest data={item} key={index} />
            )) :
            '已经到底啦     ̊ଳ ̊';
        return (
            <div className="mobilearticle">
                <Link to="/">
                    <div className="backtohome"></div>
                </Link>
                <div className="category">
                    <hr /><span className="categorytitle">CATEGORIES</span><hr />
                    <div className="categoryitemscontaniner">
                        {list}
                    </div>
                    <div className="xiajiantou"></div>
                </div>
                <div className="lastestarticle">
                    <hr /><span className="latest">Latest</span><hr />
                    {article}
                    <div className="xiajiantou jiazaigengduo" onClick={this.handlePageChange.bind(this)}></div>
                </div>
            </div>
        )
    }
}