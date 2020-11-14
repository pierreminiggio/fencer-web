import { Button, CircularProgress, Tooltip } from '@material-ui/core'
import DisabledButtonForTooltip from './DisabledButtonForTooltip'
import ButtonProgress from './ButtonProgress'

/**
 * @typedef {Object} TooltipedButtonProps
 * 
 * @property {string} text
 * @property {string} tooltip
 * 
 * @returns {JSX.Element}
 */

/**
 * @param {TooltipedButtonProps} props And other props
 * 
 * @returns {JSX.Element}
 */
export default function TooltipedButton(props) {
    const childProps = {...props}
    const text = childProps.text
    delete childProps.text
    const loading = childProps.loading
    delete childProps.loading

    const isTooltip = childProps.tooltip !== undefined
    if (! isTooltip) {

        return <Button {...childProps}>{loading ? <ButtonProgress /> : ''}{text}</Button>
    }

    const tooltip = childProps.tooltip
    delete childProps.tooltip

    if (props.disabled !== undefined) {

        return <Tooltip title={tooltip}>
            <DisabledButtonForTooltip
                {...childProps}
                text={text}
                tooltip={tooltip}
                loading={loading}
            />
        </Tooltip>
    } 

    return <Tooltip title={tooltip}>
        <Button {...childProps}>{loading ? <CircularProgress size={14} style={{marginRight: '6px'}} /> : ''}{text}</Button>
    </Tooltip>
}
