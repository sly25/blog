import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {

    render() {
        let style = {
            'background':'transparent',
            'borderColor':'#000020',
            'position':'absolute',
            'right':'0',
            'top':'0'
        };
        return (
                <div>
                    <Menu mode="horizontal" style={style}>
                        <Menu.Item key="home"><Link to="/">首页</Link></Menu.Item>
                        <Menu.Item key="article"><Link to="/article">文章</Link></Menu.Item>
                        <Menu.Item key="friend"><Link to="/friend">友链</Link></Menu.Item>
                        <Menu.Item key="about"><Link to="/about">关于我</Link></Menu.Item>
                    </Menu>
                </div>
        )
    }
}