import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import './style.less';

const SubMenu = Menu.SubMenu;

export default class siderNav extends React.Component {
    render() {
        let style = {
            'width' : '200px',
            'height' : '100%',
            'background':'rgb(156,195,218)',
            'borderColor':')rgb(156,195,218',
            'color' : 'rgb(200,122,128)',
        };
        let style1 = {
            'background':'transparent',
        };
        return (
            <div className="sidernavcontainer">
                <Menu style={style} mode="inline">
                    <Menu.Item key="sub1" style={style1}>
                        <Link to="/sly_admin">新文章</Link>
                    </Menu.Item>
                    <SubMenu key="sub2" title={<span><span>管理</span></span>} style={style1}>
                        <Menu.Item key="5"><Link to="/sly_admin/edit_article">文章</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/sly_admin/edit_classify">分类</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}