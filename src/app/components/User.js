import React from 'react';

const UserComponent = (props) => {
        return(
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The User page</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <p>UserName: {props.username}</p>
                    </div>
                </div>
            </div>
        );
    };

export default UserComponent;
