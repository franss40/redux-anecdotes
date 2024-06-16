import { useSelector } from "react-redux"

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    margin: 10
  }
  const noti = useSelector(state => state.notification)
  return (
    noti !== '' &&
    ( <div style={style}>
      { noti }
    </div> )
  )
}

export default Notification