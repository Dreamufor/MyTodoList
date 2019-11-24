import React, { Component } from 'react'
import {Navbar, NavItem} from 'react-materialize';
import {connect} from 'react-redux';
import action from '../store/action';

class Head extends Component {
    updateFilter = (e) => {
        let target = e.target;
    // console.log(target.innerHTML);
        let text = "all";
        switch(target.innerHTML){
            case('Finish'):
            text = 'finish';
            break;
            case('Unfinish'):
            text = 'unfinish';
            break;
            case('All'):
            text = 'all';
            break;
            default:
            break;
        }
        
        //console.log(text);
        if(this.props.flag === text) {
            return;
        }
        this.props.filter(text);
    }

    render(){
        // let {data} = this.props;
        // let len = data.filter(item => (parseFloat(item['state']) === 0)).length;
        return(
            <div>
                <h4 className="cyan-text text-darken-3 center">My Todo List</h4>
                <Navbar className="deep-orange lighten-1">    
                <NavItem onClick={this.updateFilter}>All</NavItem>
          
                <NavItem onClick={this.updateFilter}>Unfinish</NavItem>

                <NavItem onClick={this.updateFilter}>Finish</NavItem>

                </Navbar>
            </div>
           
        )
    }
}



export default connect(state=>({...state.todo}), action.todo)(Head);