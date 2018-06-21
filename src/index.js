import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import PCHome from './js/containers/PCHome';
import PCArticle from './js/containers/PCArticle';
import PCFriend from './js/containers/PCFriend';
import MobileHome from './js/containers/MobileHome';
import MobileArticle from './js/containers/MobileArticle';
import MobileFriend from './js/containers/MobileFriend';
import MobileAbout from './js/containers/MobileAbout';
import Login from './js/containers/Login';

import MediaQuery from 'react-responsive';

class Index extends React.Component {
    render() {
        return (
            <div className="main">
                <MediaQuery query='(min-device-width: 1224px)'>
                    <div className="main">
                        <Router>
                            <Switch>
                                <Route exact path="/" component={PCHome}/>
                                <Route path="/article" component={PCArticle}/>
                                <Route path="/friend" component={PCFriend}/>
                                <Route path="/about" component={PCFriend}/>
                                <Route path="/sly_admin" component={Login} />
                            </Switch>
                        </Router>
                    </div>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1223px)'>
                    <div className="main">
                        <Router>
                            <Switch>
                                <Route exact path="/" component={MobileHome}/>
                                <Route path="/article" component={MobileArticle}/>
                                <Route path="/friend" component={MobileFriend}/>
                                <Route path="/about" component={MobileAbout}/>
                            </Switch>
                        </Router>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}
ReactDOM.render(<Index/>,document.getElementById('app'));
