import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import store, { loadDrinks, loadToppings } from './store'
import Navbar from './components/Navbar'
import Drinks from './components/Drinks'
import Home from './components/Home'
import About from './components/About'
import Gallery from './components/Gallery'

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
                <Route component={Navbar} />
                <Route path='/home' component={Home} />
                <Route path='/menu' component={Drinks} />
                <Route path='/about' component={About} />
                <Route path='/gallery' component={Gallery} />

                <Redirect to='/home' />
            </Router>
        )
    }
})

render(<Provider store={ store }>
    <Router>
    <App />
    </Router>
    </Provider>, document.querySelector('#root'));