import "./ClientBox.scss";
import Foto1 from "../../assets/clients/EgaBob.jpg";

export interface ClientImage {
  src?: string;
  alt?: string;
}

export const ClientBox: React.FC<ClientImage> = ({ src, alt }) => {
  return (
    <div className="clientImage">
      <img src={src} alt={alt} className="clientPhoto" />
    </div>
  );
};
