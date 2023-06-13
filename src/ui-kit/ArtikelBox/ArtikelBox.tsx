import "./ArtikelBox.scss";

export interface IArtikel{
    src?: string
    alt?: string
    artDate?: string
    artTitle?: string
    children:React.ReactNode
}

export const ArtikelBox:React.FC<IArtikel> = ({
    src,
    alt,
    artDate,
    artTitle,
    children,
}) => {
  return (
    <div className="artBoxContainer">
      <div className="artImage">
        <img src={src} alt={alt} />
      </div>
      <div className="artText">
        <div className="artText-Date">
          <span> {artDate}<br /></span>
        </div>
        <div className="artText-Title">
          <span> {artTitle}<br /></span>
        </div>
        <div className="artText-Detail">
          <span> {children}<br /></span>
        </div>
      </div>
    </div>
  );
};
