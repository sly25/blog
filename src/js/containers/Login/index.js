import React from 'react';

import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';

import './style.less';

import RichTextEditor from '../RichTextEditor';
import EditArticle from '../EditArticle';
import EditClassify from '../EditClassify';

export default class Login extends React.Component {
    constructor(){
        super();
        this.state = {
          hasLogin : true,
        };
    }
    handleLogin(){
        let inp = document.getElementsByTagName('input');
        let name = inp[0].value;
        let psw = inp[1].value;
        console.log(name+psw);
    }
    render(){
        return(
            <div className="logincontainer">
                {this.state.hasLogin ?
                <div className="loginsuccess">
                    <Router>
                        <Switch>
                            <Route path="/sly_admin/edit_article" component={EditArticle} />
                            <Route path="/sly_admin/edit_classify" component={EditClassify} />
                            <Route path="/sly_admin/:id" component={RichTextEditor} />
                            <Route path="/sly_admin/" component={RichTextEditor} />
                        </Switch>
                    </Router>
                </div> :
                <div className="loginpage">
                        <input type="text" id="name"/><br />
                        <input type="password" id="password"/><br />
                        <button onClick={this.handleLogin.bind(this)}>登录</button>
                </div>}
            </div>
        )
    }
}
