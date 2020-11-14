import FormInputField from './FormInputField'

/**
 * @typedef {Object} FormEmailFieldProps
 * 
 * @property {string} field
 * @property {string} label
 * @property {Function} can
 * @property {Function} send
 * @property {string} transition
 */

/**
 * @param {FormEmailFieldProps} props
 * 
 * @returns {JSX.Element}
 */
export default function FormEmailField(props) {

    return <FormInputField
        type={'email'}
        field={props.field}
        label={props.label}
        can={props.can}
        send={props.send}
        transition={props.transition}
    />
}