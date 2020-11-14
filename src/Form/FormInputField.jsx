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

    return <TextField
        label={props.label}
        type={props.type}
        disabled={! props.can(props.transition)}
        onChange={(e) => props.can(props.transition) && props.send(props.transition, {
            field: props.field,
            value: e.target.value
        })}
    />
}
