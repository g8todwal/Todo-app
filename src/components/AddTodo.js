import React from 'react'

export class AddTodo extends React.Component {
	constructor(props){
		super(props);
		this.state={
			title: ''	
		}
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: '' });
	}

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		return (
			<form 
				onSubmit={this.onSubmit}
				style={{ display: 'flex' , margin:'5px 5px'}}
			>
				<input 
					type="text" 
					name="title" 
					placeholder="Add Todo ..." 
					style={{ flex: '10', padding: '5px' }}
					value={this.state.title}
					onChange={this.onChange}
				/>
				<input 
					type="submit" 
					value="Submit" 
					className="btn" 
					style={{flex: '1'}}
				/>
			</form>
		)
	}
}

export default AddTodo