import React from 'react';

const MainComponent = (props) => {
        return(
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Main page</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                       <button className="btn btn-primary" onClick={props.changeUserName}>
                           Change UserName
                       </button>
                    </div>
                </div>

            </div>
        );
};

export default MainComponent;