import AlertData from '../../../../Struct/MaterialUI/AlertData'
import { Alert } from '@material-ui/lab'

const emptySpaceStyle = {
    paddingTop: '48px'
}

/**
 * @typedef {Object} AlertOrEmptySpaceProps
 * 
 * @property {AlertData} alert
 */

/**
 * @param {AlertOrEmptySpaceProps} props
 * 
 * @returns {JSX.Element}
 */
export default function AlertOrEmptySpace(props) {
    const childProps = {...props}

    if (! childProps.alert) {
        return <div style={emptySpaceStyle}></div>
    }

    const alert = childProps.alert
    delete childProps.alert

    return <Alert severity={alert.severity} {...childProps}>{alert.message}</Alert>
}
