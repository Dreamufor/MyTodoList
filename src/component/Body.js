import React, { Component } from 'react'
import {Collection, CollectionItem,Icon,Checkbox} from 'react-materialize';
import {connect} from 'react-redux';
import action from '../store/action';

class Body extends Component {
    // constructor(props){
    //     super(props);
    // }

    render(){
        //get data, according flag, filter content
        let { data, flag } = this.props;
        data = data.filter(item => {
            let {state } = item;
            state = parseFloat(state);
            if (flag === 'finish'){return state===1 }
            if (flag === 'unfinish'){return state===0 }
            return true;
        })
        return(
            <div>
            <Collection>
               {data.map((item, index) => {
                   let { id, name, state } = item;
                   state = parseFloat(state);
                   return(
                    <CollectionItem key={index}>  
                    <Checkbox value="todo" label={name} checked={state} onChange={e => {
                        let newState = e.target.checked ? 1 : 0;
                        this.props.updateState(id, newState)
                        }}/>
                    <a href="javascript:void(0)" className="secondary-content" onClick={e =>{                
                            this.props.remove(id);
                        }}>
                    <Icon className="deep-orange-text text-lighten-1">
                    delete
                    </Icon>
                    </a>
                    </CollectionItem>
                   )
                
                })}
               
                </Collection>
            </div>
        )
    }
}

export default connect(state=>({...state.todo}), action.todo)(Body); 