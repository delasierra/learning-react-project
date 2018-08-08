/**
 * Created by csierra on 7/8/18.
 */
import React from 'react';

// HOC Warpper example
const withClassWrapper = (WrappedComponent, className) => {
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
};

export default withClassWrapper;