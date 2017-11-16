import { h } from 'preact';
import style from './style';
import ImageContainer from '../imageContainer';

const ImageGallery = ({ media }) => {
	if (media){
		const items = media.map(item => <ImageContainer item={item} /> );
		return (
			<div class={style.imageGallery}>
			 {items}
			</div>
		);
	}

	return <div> Loading..</div>;
	
	
};

export default ImageGallery;