import "./ImageBox.scss";

export interface ImageInterface {
  placeLabel?: string;
  priceLabel?: string;
  src: string;
  alt: string;
}

export const ImageBox: React.FC<ImageInterface> = ({
  placeLabel,
  priceLabel,
  src,
  alt,
}) => {
  return (
    <div className="imageContainer relative">
      <div className="imageHeader">
        <img src={src} alt={alt} className="imagePhoto" />
        <div className="imageBody">
          <div className="imageText">
            <span className="imageText-title">
              {placeLabel} <br />
            </span>
            <span className="imageText-body">{priceLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
