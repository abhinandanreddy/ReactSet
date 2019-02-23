/**
 * Created by abhi on 4/21/2017.
 */

import React from  "react";
import ReactDOM from "react-dom";
import {Header}   from "./Header";
import {Home}   from "./Home";

class App extends React.Component{

    constructor(){
        super();
        this.state={
            homelink:"initialHomeLink"
        };
     }

     changeLinkName(newLink){
        this.setState({
           homelink:newLink
        });
     }
    render(){

        var user={ hobbies:["cricket","Coding","Surfing","swimmming"] };
        return (
           <div className="container">
               <div className="row">
                   <div className="col-xs-12">
                        <Header link={this.state.homelink} />
                   </div>
               </div>

               <div className="row">
                   <div className="col-xs-12">
                       <Home user={user} name="Abhi" age="27" changeLinkName={this.changeLinkName.bind(this)}/>
                   </div>
               </div>
           </div>
        );
    }
}


//ReactDOM.render(<App/> , window.document.getElementById("root"));