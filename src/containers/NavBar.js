import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import { updateMap } from '../redux/actions'



const mapStateToProps = (state) => {
    return {
        user: state.user,
        map: state.map
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMap: (address) => dispatch(updateMap(address))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)