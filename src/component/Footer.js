import React, { Component } from 'react'
import {TextInput} from 'react-materialize';
import {connect} from 'react-redux';
import action from '../store/action';

class Footer extends Component {
    // constructor(props){
    //     super(props);
    // }
    addTodo = (e) => {
        if(e.keyCode === 13){
            let value = e.target.value.trim();
            if (value.length === 0) return;
            this.props.add({
                name: value,
                state: 0 // 0 means unfinish
            })
            e.target.value = '';
        }
    }


    render(){
        return(
        <TextInput label="Add todos" onKeyUp={this.addTodo}/>
        )
    }
}

export default connect(state=>({...state.todo}), action.todo)(Footer);