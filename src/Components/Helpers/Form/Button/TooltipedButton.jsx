import { Button, Tooltip } from '@material-ui/core'
import DisabledButtonForTooltip from './DisabledButtonForTooltip'

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

    const isTooltip = childProps.tooltip !== undefined
    if (! isTooltip) {

        return <Button {...childProps}>{text}</Button>
    }

    const tooltip = childProps.tooltip
    delete childProps.tooltip

    if (props.disabled !== undefined) {

        return <Tooltip title={tooltip}><DisabledButtonForTooltip {...childProps} text={text} tooltip={tooltip}/></Tooltip>
    } 

    return <Tooltip title={tooltip}><Button {...childProps}>{text}</Button></Tooltip>
}
