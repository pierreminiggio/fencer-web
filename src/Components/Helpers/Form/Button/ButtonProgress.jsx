import { CircularProgress } from '@material-ui/core'

const style = {
    marginRight: '6px'
}

/**
 * @param {Object} props
 * 
 * @returns {JSX.Element}
 */
export default function ButtonProgress() {
    return <CircularProgress size={14} style={style} />
}
