import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './stores/configureStore'
import Conversion from './containers/Conversion';


class MainComponent extends React.Component {


    render() {
        return (
            <div>
                <Conversion testProp1="hello"/>
            </div>
        )
    }
}


ReactDOM.render(<Provider store={store}><MainComponent /></Provider>, document.getElementById('container'));
