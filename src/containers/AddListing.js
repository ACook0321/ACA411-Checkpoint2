import { connect } from 'react-redux'
import AddListing from '../components/AddListing'
import { addListing } from '../redux/actions'
import { updateMap } from '../redux/actions'


const mapStateToProps = (state) => {
    return {
        listings: state.listings,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addListing: (listing) => dispatch(addListing(listing)),
        updateMap: (address) => dispatch(updateMap(address))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddListing)