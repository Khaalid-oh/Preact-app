import { render } from 'preact';
import { Todo } from './Todo';


export function App() {
	return (
		<div>
			<Todo/>
		</div>
	);
}

render(<App />, document.getElementById('app'));
