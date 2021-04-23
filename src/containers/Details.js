import { connect } from 'react-redux'
import Details from '../components/Details'

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        map: state.map
    }
}


export default connect(mapStateToProps)(Details)