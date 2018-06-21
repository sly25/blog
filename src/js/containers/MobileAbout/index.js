import React from 'react';

import { Link } from 'react-router-dom';

import './style.less';

export default class MobileAbout extends React.Component{
    componentDidMount(){
        let ctr = document.getElementsByClassName('hey')[0];
            // hr = document.getElementsByClassName('firsthr')[0];
        ctr.style.height = window.getComputedStyle(ctr).width;
        // hr.style.left = '-' + (parseInt(window.getComputedStyle(hr).width) * 0.5) + 'px';
    }
    render(){
        return (
            <div className="friendcontainer" id="mobileabout">
                <Link to="/">
                    <div className="backtohome"></div>
                </Link>
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
                    <p>每天梦想成为大佬的小黑</p>
                    <p>内容浅薄 敬希指正</p>
                    <p>欢迎交流~ yuanyuan1016@hotmail.com</p>
                </div>
            </div>
        )
    }
}