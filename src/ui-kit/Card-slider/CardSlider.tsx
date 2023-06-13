import { ImageBox } from '../ImageBox'
import './CardSlider.scss'
import Place1 from "../../assets/imageBox/place1.jpg";
import Place2 from "../../assets/imageBox/place2.jpg";
import Place3 from "../../assets/imageBox/place3.jpg";
import Place4 from "../../assets/imageBox/place4.jpg";
import Place5 from "../../assets/imageBox/place5.jpg";

export interface ImageInterface {
    placeLabel?: string;
    priceLabel?: string;
    image: string;
    alt: string;
  }


export const CardSlider: React.FC<ImageInterface> = ({
    placeLabel,
    priceLabel,
    image,
    alt,
  })=> {
    return (
        <div className='cardContainer'>
            <ImageBox src={image} alt={alt} placeLabel={placeLabel} priceLabel={priceLabel}/>
        </div>
    )
}