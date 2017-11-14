import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	state = {};

	async componentDidMount() {
		const res = await fetch('http://krater.se/wp-json/wp/v2/media/');
		const json = await res.json();
		console.log(json);
		const media = await json.map(item => <img src={item.source_url} />);
		this.setState({ media });
	}

	render() {
		return (
			<div class={style.home}>
				<h1>Media from wp</h1>
				<ul>{this.state.media}</ul>
			</div>
		);
	}
}
