import React from 'react';
import { connect } from 'react-redux';

import './Loader.scss';

class Loader extends React.Component {
    render() {
        return (
            <div
                className="loader"
                style={{ display: this.props.isShow ? 'block' : 'none' }}>
                <div className="spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ isShow: state.contactReducer.isShow });

export default connect(mapStateToProps)(Loader);