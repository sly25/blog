import React from 'react';

import Nav from '../../components/Nav';
import PCRequest from './PCRequest';

import { get } from '../../fetch/get';

import { Pagination } from 'antd';

import './style.less';

export default class PCArticle extends React.Component{
    constructor(){
        super();
        this.state = {
            allType : [],
            data : [],
            page : 1,
            articleCount: 0,
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
        get('/api/article/count').then( res => {
            this.setState({
                articleCount : parseInt(res),
            })
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
    handlePageChange(page){
        this.setState({
            page : page,
        });
        get(`/api/article/content/${page}`).then( res => {
            this.setState({
                data : JSON.parse(res)
            });
        })
    }
    render(){
        const { allType,data } = this.state;
        const list = allType.length ?
            allType.map((item,index) => (
                <li key={index} onClick={this.showOneType.bind(this)}>{item}</li>
            )) :
            '没有任何分类';
        const article = data.length ?
            data.map((item,index) => (
                <PCRequest data={item} key={index} />
            )) :
            '已经到底啦     ̊ଳ ̊'
        return (
            <div className="article">
                <Nav/>
                <div className="articlecontainer">
                    <div className="articlecontainermain">
                        {article}
                    </div>
                    <div className="articlecontaineraside">
                        <ul>CATEGORIES
                            {list}
                        </ul>
                    </div>
                </div>
                <div className="articlefooter">
                    <Pagination simple current={this.state.page} pageSize={5} total={this.state.articleCount}  onChange={this.handlePageChange.bind(this)} />
                </div>
            </div>
        )
    }
}