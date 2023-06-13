import { toast, ToastContentProps, ToastOptions } from 'react-toastify'
import './Toast.scss'
import { Icon } from '../../ui-kit/Icon'
import classNames from 'classnames'

export const useToast = (title: string, type: string, body: string) => {
  const toastObject: ToastOptions = {
    position: 'top-right',
    autoClose: 3600000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    closeButton: false,
  }

  const Msg = ({ closeToast, toastProps }: Partial<ToastContentProps>) => {
    return (
      <>
          <div className={classNames('flex toastBorder', {
                toastBorder__info: type === 'info',
                toastBorder__danger: type === 'danger',
              })}>
            <div className='toastIcon'>
              {/* {type === 'info' && (
                <Icon type='Priority-default' size='small' />
              )}
               {type === 'success' && (
                <Icon type='Success' size='small' />
              )}
               {type === 'danger' && (
                <Icon type='Priority-danger' size='small' />
              )} */}
            </div>
            <div className='flex-1 grid grid-rows-2 pl-3'>
              <div className='toastHeader'>{title}</div>
              <div className='toastMessages'>{body}</div>
            </div>
            <div className='toastClose'>
              <Icon type='Close' size='small' />
            </div>
          </div>
      </>
    )
  }

  toast(<Msg />, toastObject)
}
