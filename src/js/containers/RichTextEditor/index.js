import React from 'react';
import LzEditor from 'react-lz-editor/editor/index';

import SiderNav from '../../components/siderNav';

import { Radio,Button } from 'antd';
const RadioGroup = Radio.Group;

import { get } from '../../fetch/get';
import { post } from '../../fetch/post';

import './style.less';

export default class RichTextEditor extends React.Component{
    constructor(){
        super();
        this.state = {
            responseList: [],
            allType : [],
            type : 'React',
            title : '',
            content: '',
            tmpcontent: '',
        };
    };
    onSelectChange(e) {
        this.setState({
            type: e.target.value,
        });
    }
    onInputChange(e) {
        this.setState({
            title: e.target.value,
        });
    }
    onSubmit(){
         this.setState({ content: this.state.tmpcontent},() => {
             // console.log(this.state.content);
             post('/api/add_article',this.state);
         });
    }

    receiveHtml(content){
        this.setState({ tmpcontent: content });
    }
    componentDidMount(){
        if(this.props.match.params.id){
            get(`/api/configOneArticle/${this.props.match.params.id}`).then(res => {
                let data = JSON.parse(res);
                this.setState({
                    type : data.type,
                    title : data.title,
                    content : data.content,
                    id : data.id
                });
            });
        }
        get('/api/editArticle/classify').then( res => {
            this.setState({
                allType : JSON.parse(res)
            },() => {
                // console.log(this.state.allType);
            });
        })
    }
    render(){
        const uploadProps = {
            action: "http://v0.api.upyun.com/devopee",
            onChange: this.onChange,
            listType: 'picture',
            fileList: this.state.responseList,
            data: (file) => {

            },
            multiple: true,
            beforeUpload: this.beforeUpload,
            showUploadList: true,
        };
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
            color: '#2592fc'
        };
        const { allType } = this.state;
        // console.log(allType);
        // console.log(typeof allType);
        // console.log(allType.length);
        const radio = allType.length ?
            allType.map((item,index) => (
                <Radio style={radioStyle} value={item} key={index}>{item}</Radio>
            )) :
            '没有任何分类';
        return (
            <div className="texteditorcontainer" >
                <SiderNav/>
                <input type="text" id="articleTitleInput" value={this.state.title} onChange={this.onInputChange.bind(this)} placeholder="标题"/>
                <LzEditor active={true} cbReceiver={this.receiveHtml.bind(this)} convertFormat="markdown" uploadProps={uploadProps} importContent={this.state.content}/>
                <div className="texteditorclassify">
                    <p>分类</p>
                        <RadioGroup onChange={this.onSelectChange.bind(this)} value={this.state.type}>
                            {radio}
                        </RadioGroup>
                </div>
                <Button ghost onClick={this.onSubmit.bind(this)} className="fabu">发布</Button>
            </div>
        )
    }
}