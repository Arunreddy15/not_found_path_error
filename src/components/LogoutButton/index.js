// Write your JS code here
import Cookie from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const LogoutButton = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <button type="button" onClick={onClickLogout}>
      LogOut
    </button>
  )
}

export default withRouter(LogoutButton)
