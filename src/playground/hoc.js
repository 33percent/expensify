import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
<div>
    <h1>Infor</h1>
    <p>
        this inform is {props.info}
    </p>
</div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
       {props.isAdmin &&  <p>
            This is private info. Please dont encclose them.
        </p>}
            <WrappedComponent {...props}/>
     
        </div>
    )
};

const AdminInfo = withAdminWarning(Info)

ReactDOM.render(<AdminInfo isAdmin = {false} info="They are the details"/>,document.getElementById('app'));