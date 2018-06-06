import NavBar from '../components/NavBar'
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    let user = ownProps.user
    const currentRoute = state.navBar.currentRoute
  return {
    user,
    currentRoute
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)