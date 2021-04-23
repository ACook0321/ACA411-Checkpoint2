import { connect } from 'react-redux'
import Listings from '../components/Listings'
import { removeListing } from '../redux/actions'
import { updateMap } from '../redux/actions'


const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings,
        map: state.map
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeListing: (index) => dispatch(removeListing(index)),
        updateMap: (address) => dispatch(updateMap(address))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)