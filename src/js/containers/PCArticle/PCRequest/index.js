import React from 'react';

import './style.less';

export default class PCRequest extends React.Component{
    render(){
        return (
            <div className="requestarticle">
                <div className="time">
                    <p className="date">{this.props.data.time.slice(-2)}</p>
                    <hr />
                    <p className="year">{this.props.data.time.slice(0,-2)}</p>
                </div>
                <div className="articleall">
                    <div className="title">
                        <p>{this.props.data.title}</p>
                        <hr />
                    </div>
                    <div className="articlecontent">
                        <p>{this.props.data.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}