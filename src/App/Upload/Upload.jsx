/**
 * Created by macdja38 on 2017-03-04.
 */

import React, {Component} from 'react';

import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { Button, IconButton, FloatingButton, FlatButton } from 'react-buttons';



export default class Upload extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    onClick(){
        ReactDOM.render( <TEST/>, document.getElementById('app'));
    }


    render() {
        return (<div><p>Hello</p>
            <p>Hi</p>
            <Button faIcon="plus" onClick={this.onClick}>New Thing</Button>
            <Button materialIcon="favorite" iconBefore={true} onClick={this.onClick}>Favorite</Button>

            <IconButton faIcon="plus" label="Add a new thing" onClick={this.onClick} />
            <IconButton materialIcon="favorite" label="Add this as a favorite" onClick={this.onClick} />


            <FlatButton color="primary" onClick={this.onClick} />

            <FloatingButton faIcon="plus" label="Add a new thing" onClick={this.onClick} />



        </div>)
    }

}
