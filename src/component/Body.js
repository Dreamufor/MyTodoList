import React, { Component } from 'react'
import {Collection, CollectionItem, Checkbox} from 'react-materialize';
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
            <Collection>         
               { data.length === 0 ? (<CollectionItem key={0}>
                    You have no todo's left, yay!
                     </CollectionItem>):(data.map((item, index) => {
                   let { id, name, state } = item;
                   state = parseFloat(state);
                        return(
                    <CollectionItem key={id}>  
                    <Checkbox value="todo" label={name} checked={state} onChange={e => {
                        let newState = e.target.checked ? 1 : 0;
                        this.props.updateState(id, newState)
                        }}/>
                    <a href=" " className="secondary-content" onClick={e =>{                
                            this.props.remove(id);
                        }}>
                        <i class="fas fa-trash deep-orange-text text-lighten-2"></i>
                    </a>
                    </CollectionItem>
                   )                       
                }))
                   }
               
                </Collection>
        )
    }
}

export default connect(state=>({...state.todo}), action.todo)(Body); 