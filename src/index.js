import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import store, { loadDrinks, loadToppings } from './store'
import Navbar from './components/Navbar'
import Drinks from './components/Drinks'
import Toppings from './components/Toppings'

const App = connect(
    state => state,
    (dispatch) => {
        return {
            bootstrap: async() => {
                dispatch(loadDrinks())
                dispatch(loadToppings())
            }
        }
    }
)(class App extends Component {
    async componentDidMount() {
        this.props.bootstrap()
    }
    render() {
        return (
            <Router>
                <div>
                    <h1>Bubble Bear Tea</h1>
                    <Route component={Navbar} />

                </div>
            </Router>
        )
    }
})

render(<Provider store={ store }>
    <Router>
    <App />
    </Router>
    </Provider>, document.querySelector('#root'));