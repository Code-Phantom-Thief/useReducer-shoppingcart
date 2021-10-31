import { Route } from 'react-router';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
	return (
		<div>
			<Header />
			<Route exact path="/" component={Home}/>
			<Route exact path="/cart" component={Cart}/>
		</div>
	);
};

export default App;
