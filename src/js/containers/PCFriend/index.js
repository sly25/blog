import React from 'react';

import { Link } from 'react-router-dom';

import './style.less';

export default class PCFriend extends React.Component{
    render(){
        return (
            <div className="friendcontainer">
                <div className="hey">
                    <div className="zmh">
                        <hr className="h zmh1"/>
                        <hr className="h zmh2"/>
                        <hr className="h zmh3"/>
                        <hr className="h zmh4"/>
                        <hr className="h zmh5"/>
                    </div>
                    <div className="zme">
                        <hr className="h zme1"/>
                        <hr className="h zme2"/>
                        <hr className="h zme3"/>
                        <hr className="h zme4"/>
                        <hr className="h zme5"/>
                    </div>
                    <div className="zmy">
                        <hr className="h zmy1"/>
                        <hr className="h zmy2"/>
                        <hr className="h zmy3"/>
                    </div>
                </div>
                <div className="footersaying">
                    <ul>
                        <Link to="/"><li>后退！！！</li></Link>
                        <li>没得朋友，皮这一下假装快乐</li>

                        <li><a href="http://idoge.cc">这里有一个世界上脆胖的黑客</a></li>
                        <li>欢迎交流~ yuanyuan1016@hotmail.com</li>
                    </ul>
                    <p>每天梦想成为大佬的小黑</p>
                    <p>内容浅薄 敬希指正</p>
                </div>
            </div>
        )
    }
}