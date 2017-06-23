import React from 'react';
import FetchPeriodic from '../../../common/FetchPeriodic';

import TrackerUI from './TrackerUI';

const TrackerFetchUI = ({error, status, running, url, targets, onSuccess, onError}) =>
    <div>
        <div>{error}</div>
        {status === "disconnected"? null :
            <FetchPeriodic
                url={ url }
                onAnimationFrame={true}
                prevent={ !running }
                onSuccess={ onSuccess }
                onError={ onError }
            />
        }
        <TrackerUI targets={targets}/>
    </div>

export default TrackerFetchUI;