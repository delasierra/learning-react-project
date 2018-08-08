/**
 * Created by csierra on 7/8/18.
 */
import React from 'react';

const WithClass = (props) => {
    return (
        <div className={props.classes}>
            {props.children}
        </div>
    )
};

export default WithClass;