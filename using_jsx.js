//class App extends Component {
	//render() {
		//return (
			//<>
				//<h1>Hello World</h1>
				//<p>This is a paragraph</p>
			//</>
			//<h1 className="my-class">This is JSX</h1>
			
		//);
	//}
//}

class App extends Component {
		render() {
			return (
				<form aaction="/process" method="post">
					<div class="form-group">
						<label htmlFor="email">Email:</label>
						<input type="text" id="email" name="username" class="form-control" />
					</div>
				</form>
			);
		}
	}
