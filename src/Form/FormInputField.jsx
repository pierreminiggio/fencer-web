import { TextField } from "@material-ui/core"

/**
 * @typedef {Object} FormInputFieldProps
 * 
 * @property {string} type
 * @property {string} field
 * @property {string} label
 * @property {Function} can
 * @property {Function} send
 * @property {string} transition
 */

/**
 * @param {FormInputFieldProps} props
 * 
 * @returns {JSX.Element}
 */
export default function FormInputField(props) {

    const type = props.type
    const field = props.field
    const label = props.label
    const can = props.can
    const send = props.send
    const transition = props.transition

    return <TextField
        label={label}
        type={type}
        disabled={! can(transition)}
        onChange={(e) => can(transition) && send(transition, {
            field: field,
            value: e.target.value
        })}
    />
}