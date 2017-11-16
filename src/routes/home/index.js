import { h, Component } from 'preact';
import style from './style';
import ImageGallery from '../../components/imageGallery';


export default class Home extends Component {
	state = {};

	stateUpdater(data) {
		this.setState(data);
	}

	
	async componentDidMount() {
		const res = await fetch('http://krater.se/wp-json/wp/v2/media/');
		const json = await res.json();
		this.stateUpdater({ json });
	}

	render() {
		return (
			<div class={style.home}>
				<h1>Media from wp</h1>
				<ImageGallery media={this.state.json} />
			</div>
		);
	}
}
