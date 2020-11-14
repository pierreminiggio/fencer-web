import React from 'react'
import { Button } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles'

const divStyle = {
    display: 'inline-block'
}

const DisableableButton = withStyles({
    root: {
      "&.Mui-disabled": {
        pointerEvents: "auto"
      }
    }
  })(Button);

/**
 * @param {DisabledButtonProps} props
 * 
 * @returns {JSX.Element}
 */
const DisabledButton = React.forwardRef((props, ref) => {
    const childProps = {...props}
    const text = childProps.text
    delete childProps.text

    return <div style={divStyle} ref={ref}><DisableableButton {...childProps} disabled>{text}</DisableableButton></div>
})

export default DisabledButton
