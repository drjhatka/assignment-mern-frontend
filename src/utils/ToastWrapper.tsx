import { Bounce, ToastContainer } from "react-toastify"

const ToastWrapper = () => {
  return (
    <ToastContainer
      position='top-center'
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
      transition={Bounce}
    />
  )
}

export default ToastWrapper
