import "./ReasonDetail.scss";

export interface ImageReason {
  src?: string;
  alt?: string;
  reasonTitle?: string;
  reasonBody?: string;
}

export const ReasonDetail: React.FC<ImageReason> = ({
  src,
  alt,
  reasonBody,
  reasonTitle,
}) => {
  return (
    <div className="reasonContainer">
      <div className="reasonImage">
        <img src={src} alt={alt} />
      </div>
      <div className="reasonTitle">
        <span>{reasonTitle}</span>
      </div>
      <div className="reasonBody">
        <span>{reasonBody}</span>
      </div>
    </div>
  );
};
