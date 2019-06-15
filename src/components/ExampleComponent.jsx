import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import clickButtonAction from '../actions/ExampleAction';
// Define container component
class ExampleComponent extends React.Component {

    renderPreviewMusicTable() {
    }

    renderBlogs(){
        const { main } = this.props;
        if(main.blogs != undefined){
            const blogs = main.blogs.map((obj, idx) => {
                return (
                    <ol>
                        <li>text:{obj.text}</li>
                        <li>title:{obj.title}</li>
                    </ol>
                )
            })
            return blogs;
        }
        return "";
    }

    render() {
        const { clickButton } = this.props;
        return(
            <div>
                <button onClick={clickButton}>
                    send database request
                </button>
                <h1>here is data from database:</h1>
                {this.renderBlogs()}
            </div>
        );
    }
}

/*Allows access to the redux state for the main object.  Without
this our app will no re-render on state change*/
const mapStateToProps = state => ({
    main: state.main
});

// Map dispatch to props of container component
const mapDispatchToProps = (dispatch, state) => ({
    clickButton: () => {
        dispatch(clickButtonAction());
    }
});

// Connect container component to store
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ExampleComponent)
);