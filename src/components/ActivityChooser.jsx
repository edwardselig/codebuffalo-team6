import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { white } from 'material-ui/styles/colors';
import { EditorFormatAlignCenter } from 'material-ui/svg-icons';
import TacoButton from './TacoButton';
import Octagon from './Octagon';
import Octopus from './Octopus';

class NewComponent extends React.Component {
    render() {
        return (
            <p
                style={{
                    boxShadow: '2px 5px #000',
                    padding: '15px',
                    backgroundColor: '#07516c',
                    borderRadius: '40px',
                    textAlign: 'center'
                }}
            >
                <span style={{ color: '#ffffff', fontSize: '26.0pt', lineHeight: '107%', fontFamily: 'Indie Flower' }}>
                    Pick a{' '}
                </span>
                <span style={{ color: '#ffffff', fontSize: '26.0pt', lineHeight: '107%', fontFamily: 'Indie Flower' }}>
                    T
                </span>
                <strong>
                    <span
                        style={{ fontSize: '26.0pt', lineHeight: '107%', fontFamily: 'Indie Flower', color: '#ffffff' }}
                    >
                        ac
                    </span>
                </strong>
                <span style={{ color: '#ffffff', fontSize: '26.0pt', lineHeight: '107%', fontFamily: 'Indie Flower' }}>
                    o
                </span>
                <span style={{ color: '#ffffff', fontSize: '26.0pt', lineHeight: '107%', fontFamily: 'Indie Flower' }}>
                    -
                    <strong>
                        <span style={{ color: '#ffffff' }}>tivity</span>
                    </strong>
                </span>
                <span style={{ color: '#ffffff', fontSize: '26.0pt', lineHeight: '107%', fontFamily: 'Indie Flower' }}>
                    !
                </span>
            </p>
        );
    }
}

class ActivityChooser extends React.Component {
    renderActivityChooser() {
        const data = ['go poop', 'eat out', 'play with friends', 'give a dog a pet', 'look at birds'];
        return (
            <div>
                <NewComponent />
                <Octopus />
                <Octagon />
            </div>
        );
    }

    render() {
        const { clickButton } = this.props;
        return <div>{this.renderActivityChooser()}</div>;
    }

    /* use this pattern with  instead of pattern in sample */
    /* clickButton () {
        const { clickButtonAction: propsClickButtonAction  } = this.props;
        dispatch(propsClickButtonAction());
    } */
}

/* Allows access to the redux state for the main object.  Without
this our app will no re-render on state change */
const mapStateToProps = state => ({
    main: state.main
});
// Connect container component to store
/* export default withRouter(
    connect(
        mapStateToProps,
        dispatch => bindActionCreators({ propsClickButtonAction }, dispatch)
    )(ExampleComponent)
); */

// delete this and uncomment withRouter to link actions
export default ActivityChooser;
