import React from 'react';

import SiderNav from '../../components/siderNav';

import { Table,Divider,Popconfirm, message } from 'antd';
import { Link } from 'react-router-dom';

import { get } from '../../fetch/get';

import './style.less';

export default class EditArticle extends React.Component{
    constructor(){
        super();
        this.state = {
          data: null,
        };
    }
    confirm() {
        // console.log(this);
        get(`/api/delete_article/${this.key}`);
        message.success('删除成功');
    }
    cancel(e) {
        // console.log(e);
        // message.error('Click on No');
    }
    componentDidMount(){
        get('/api/configArticle').then(res => {
            this.setState({ data:JSON.parse(res) });
            // console.log(this.state.data);
        });
    }
    render(){
        const columns = [{
            title: '标题',
            dataIndex: 'title',
            key: 'title',
            render: text => <Link to ={`/sly_admin/${text}`}>{text}</Link>,
        }, {
            title: '时间',
            dataIndex: 'time',
            key: 'time'
        }, {
            title: '分类',
            dataIndex: 'type',
            key:'type',
        },{
            title: '',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Divider type="vertical" />
                    <Popconfirm title="确认删除此文章吗？" onConfirm={this.confirm.bind(record)} onCancel={this.cancel} okText="Yes" cancelText="No">
                        <a href="#">Delete</a>
                    </Popconfirm>
                    <Divider type="vertical" />
                </span>
            ),
        }];
        return (
            <div style={{"height":"100%"}}>
                <SiderNav/>
                <Table rowKey = {record => record.key} columns={columns} dataSource={this.state.data} />
            </div>
        )
    }
}