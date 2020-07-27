import React, {Component} from 'react';
import Header from './Layout/Header';
import AddTodo from './AddTodo';
import Todo from './Todo';
import About from './Pages/About';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

class Main extends Component {
	constructor(props){
		super(props);
		this.state={
			todos:[]			
		}
	}

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then(response => this.setState({ todos:response.data }))
	}

	// ===Toogle complete===
	markComplete = (id) => {
		this.setState({ todos: this.state.todos.map(todo => {
			if(todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo;
		})});
	}

	// === delete Todo ===
	delTodo = (id) => {

		axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then(response => this.setState({ todos: [...this.state.todos.filter(
				todo => todo.id !== id
			)]}));
		
	}

	addTodo = (title) => {
		axios.post('https://jsonplaceholder.typicode.com/todos', {
			title,
			completed: false
		})
			.then(response => this.setState({ todos: [...this.state.todos, response.data] }));
	}
	
	render() {

		return(
			<Router>
				<div className="container">
					<Header />
					<Route exact path="/" render={props => (
						<React.Fragment>
							<AddTodo addTodo={this.addTodo}/>			
							<Todo 
								todos={this.state.todos} 
								markComplete={this.markComplete} 
								delTodo={this.delTodo} 
							/>	
						</React.Fragment>
					)} />
					
					<Route path="/about" component={About} />
				</div>
			</Router>
		);
	
	}	
}
 export default Main;