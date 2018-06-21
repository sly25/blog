import React from 'react';

import SiderNav from '../../components/siderNav';

import { Table,Divider,Popconfirm, message,Modal, Button } from 'antd';

import { get } from '../../fetch/get';
import { post } from '../../fetch/post';

import './style.less';

export default class EditClassify extends React.Component{
    constructor(){
        super();
        this.state = {
            visibleModel1: false,
            visibleModel2: false,
            selectedRowKeys: [],
            data: [],
        };
    }
    confirm() {
        // console.log(this);
        get(`/api/delete_classify/${this.title}`);
        message.success('删除成功');
    }
    cancel(e) {
        // console.log(e);
    }
    showModal1() {
        this.setState({
            visible1: true,
        });
    }
    handleOk() {
        let inp1 = document.getElementById('classifyName').value,
        inp2 = document.getElementById('classifyDescription').value;
        console.log(inp1,inp2);
        this.setState({
            visible1: false,
        });
        post('/api/add_classify',{
            typeName : inp1,
            typeDescription : inp2
        });
    }
    handleCancel() {
        this.setState({
            visible1: false,
        });
    }
    componentDidMount(){
        get('/api/classify/all').then( res => {
            this.setState({ data : JSON.parse(res)});
            // console.log(this.state.data);
        });
    }
    render(){
        const columns = [{
            title: '名称',
            dataIndex: 'title',
            key:'title',
        }, {
            title: '文章数',
            dataIndex: 'classifycount',
            key:'classifycount',
        },
            {
                title: '',
                key: 'action',
                render: (text, record) => (
                    <span>
                    <Divider type="vertical" />
                    <Popconfirm title="确认删除此分类吗？" onConfirm={this.confirm.bind(record)} onCancel={this.cancel} okText="Yes" cancelText="No">
                        <a href="#">Delete</a>
                    </Popconfirm>
                    <Divider type="vertical" />
                </span>
                ),
            }];
        return (
            <div style={{"height":"100%"}}>
                <SiderNav/>
                <Button type="primary" onClick={this.showModal1.bind(this)} className="xinzeng">新增</Button>
                <Modal
                    title="新增分类"
                    visible={this.state.visible1}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <div className="xinzengfenlei">
                        分类名称： <input type="text" id="classifyName" /><br />
                        分类描述： <input type="text" id="classifyDescription" />
                    </div>
                </Modal>
                <Table rowKey = {record => record.key}  columns={columns} dataSource={this.state.data} className="classifytable"/>
            </div>
        )
    }
}