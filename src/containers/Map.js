import { connect } from 'react-redux'
import Map from '../components/Map'


const mapStateToProps = (state) => {
    return {
        map: state.map
    }
}

export default connect(mapStateToProps)(Map)