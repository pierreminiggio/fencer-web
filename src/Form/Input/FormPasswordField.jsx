import FormInputField from './FormInputField'

/**
 * @typedef {Object} FormPasswordFieldProps
 * 
 * @property {string} field
 * @property {string} label
 * @property {Function} can
 * @property {Function} send
 * @property {string} transition
 */

/**
 * @param {FormPasswordFieldProps} props
 * 
 * @returns {JSX.Element}
 */
export default function FormPasswordField(props) {

    return <FormInputField
        type={'password'}
        field={props.field}
        label={props.label}
        can={props.can}
        send={props.send}
        transition={props.transition}
    />
}