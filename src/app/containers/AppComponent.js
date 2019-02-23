import React from 'react';
import {connect} from 'react-redux';
import setName from '../actions/userAction';
import MainComponent from '../components/Main';
import UserComponent from '../components/User'

class AppComponent extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
           <div>
               <MainComponent changeUserName= {() => this.props.setName('Max')} />
               <UserComponent username= {this.props.user.name} />
           </div>
        )
     }
}

const mapStatesToProps = (state) =>{
    return {
        user: state.userReducer,
        math: state.mathReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    }
}

export default connect(mapStatesToProps, mapDispatchToProps) (AppComponent);

