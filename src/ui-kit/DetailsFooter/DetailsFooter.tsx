import './DetailsFooter.scss'


export interface IDetails {
    DetailsTitle?: string
    children: React.ReactNode
}
export const DetailsFooter: React.FC<IDetails> = ({DetailsTitle, children}) => {
    return(
        <div className='DetailsContainer'>
            <div className='DetailsTitle'>
                {DetailsTitle}
            </div>
            <div className='DetailsBody'>
                {children}
            </div>
        </div>
    )
}