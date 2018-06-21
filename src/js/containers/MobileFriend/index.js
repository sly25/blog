import React from 'react';

import { Link } from 'react-router-dom';

import './style.less';

export default class MobileFriend extends React.Component{
    componentDidMount(){
        let ctr = document.getElementById('mobilefrientcontainer'),
        hr = document.getElementsByClassName('firsthr')[0];
        ctr.style.height = window.getComputedStyle(ctr).width;
        hr.style.left = '-' + (parseInt(window.getComputedStyle(hr).width) * 0.5) + 'px';
    }
    render(){
        return (
            <div className="mobilefriendcontainer">
                <Link to="/">
                    <div className="backtohome"></div>
                </Link>
                <div className="social" id="mobilefrientcontainer">
                    <p className="socialfriend">firends</p>
                    <hr className="firsthr"/>
                    <hr />
                    <span>没得朋友</span><br /><span className="secspan">皮一下假装快乐⚭-⚭</span>
                    <p className="contact">联系方式</p>
                    <hr className="lasthr"/>
                    <Link to="/about"><p className="contacthere">here</p></Link>
                </div>
            </div>
        )
    }
}