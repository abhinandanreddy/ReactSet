/**
 * Created by abhi on 4/21/2017.
 */
 import React from 'react';

 export class Header extends React.Component{

     render() {
         return (
             <nav className="navbar navbar-default">
                 <div className="container">
                     <div className="navbar-header">
                         <ul className="nav navbar-nav">
                             <li href="#"> {this.props.link}</li>
                         </ul>
                     </div>
                 </div>
             </nav>
         );
     }
 }