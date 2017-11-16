import { h } from 'preact';
import style from './style';

const ImageContainer = props =>  <img class={style.imageContainer} src={props.item.source_url} />;

export default ImageContainer;
