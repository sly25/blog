import React from 'react';

import './style.less';

import Nav from '../../components/Nav';

export default class Home extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div class="main">
                <div class="homebackground"></div>
                <div class="coverbody">
                    <Nav/>
                    <div class="headimage">
                        <img src="https://i.loli.net/2018/03/20/5ab0632f6eed9.jpg"/>
                    </div>
                    <h1>切梦刀</h1>
                    <div class="line"></div>
                    <p>一只写前端的程序媛<br />跟你打了声招呼，哈喽~</p>
                </div>
            </div>
        )
    }
}