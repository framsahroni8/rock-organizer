import './TiktokVideo.scss'

export interface TiktokVideo{
    src?: string;
}

export const TiktokVideo: React.FC<TiktokVideo> = ({src}) => {
    return(
        <iframe
        src={src}
        width='335px'
        height='780px'
        ></iframe>
    )
}