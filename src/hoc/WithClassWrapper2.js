/**
 * Created by csierra on 7/8/18.
 */
import React, {Component} from 'react';

const withClassWrapper2 = (WrappedComponent, className) =>
    class extends Component {

        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    };

export default withClassWrapper2;