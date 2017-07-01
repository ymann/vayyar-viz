import HeatMapFetchUI from './HeatMapFetchUI';
import { connect } from 'react-redux'
import { updateHeatMapData } from '../../actions/DataActions'
import { trackerScreenSetError} from '../../actions/TrackerScreenActions'

const mapStateToProps = (state) => {
  const localState = state.screens.tracker;
  return {
    status: state.global.connectionStatus,
    error: localState.error,
    data: state.data.heatmap,
    url: `${state.global.serverRoot}/rawImage_YZ`,
    running: localState.running,
  }
}

const HeatMap = connect(
  mapStateToProps,
  {
    onSuccess: updateHeatMapData,
    onError: trackerScreenSetError,
  }
)(HeatMapFetchUI)

export default HeatMap
