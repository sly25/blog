import React from 'react';

import { Link } from 'react-router-dom';

import './style.less';

export default class MobileHome extends React.Component{
    render(){
        return (
            <div class="main">
                <div class="homebackground"></div>
                    <div class="mobilecoverbody">
                        <div class="mobileheadimage">
                            <img src="https://i.loli.net/2018/03/20/5ab0632f6eed9.jpg"/>
                        </div>
                        <h1>切梦刀</h1>
                        <p>一只写前端的程序媛<br />跟你打了声招呼，哈喽~</p>
                    </div>
                    <div className="mobilefooter">
                        <ul>
                            <li><Link to="/article">Articles</Link></li>
                            <li><Link to="/friend">Links</Link></li>
                            <li className="lastli"><Link to="/about">About</Link></li>
                        </ul>
                    </div>
            </div>
        )
    }
}