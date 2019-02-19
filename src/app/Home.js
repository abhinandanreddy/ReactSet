/**
 * Created by abhi on 4/21/2017.
 */

import React from 'react';

export class Home extends React.Component{

    constructor(props){
        super();
        this.state={
           age:props.age,
            changedLink:"changedLink"
        };
    }

    makeMeYounger(){
        this.setState({
            age:this.state.age -1
        });
    }

    makeMeOlder(){
        this.setState({
            age:this.state.age +1
        });
    }

    changeLinkOnInput(event){
        this.setState({
            changedLink:event.target.value
        })
    }

    changeLinkName(){
       this.props.changeLinkName(this.state.changedLink);
    }
    render(){
        let that=this;
        return(
            <div>
                <h1>Navigated to another component</h1>
                <p>Hello: {this.props.name}</p>
                <div>
                    <p>Hobbies</p>
                    <ul>
                        {this.props.user.hobbies.map((hobby,i) => {
                            return (
                                <li key={i}>{hobby}</li>
                            )
                        }      )}
                    </ul>
                </div>

                <hr/>
                 <div>
                     <p>{this.state.age}</p>
                     <button onClick={this.makeMeYounger.bind(this)} className="btn btn-success">MakeAbhiYounger</button>
                 </div>

                <hr/>
                <div>
                    <input onChange={function change(event){
                        that.changeLinkOnInput(event);
                        } }
                        value={this.state.changedLink}
                           type="text" className="input-group"></input>
                    <button onClick={this.changeLinkName.bind(this)} className="btn btn-default"> changeLinkName</button>
                </div>
            </div>
        );
    }
}
