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
import BottomNavbar from './components/BottomNavbar';

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
                {/* <Route component={Navbar} /> */}
                <Route path='/' exact component={Home} />
                <Route path='/drinks' component={Drinks} />
                <Route path='/about' component={About} />
                <Route path='/gallery' component={Gallery} />

                {/* <Route component={BottomNavbar} /> */}
                {/* <Redirect to='/home' /> */}
            </Router>
        )
    }
})

render(<Provider store={ store }>
    <Router>
    <App />
    </Router>
    </Provider>, document.querySelector('#root'));