import React from 'react';    
    const editexpense = (props) => {
        console.log(props)
        return (
            <div>
                Edit your expense with id - {props.match.params.id}
            </div>
        )
    
    }
    ;

    export default editexpense;