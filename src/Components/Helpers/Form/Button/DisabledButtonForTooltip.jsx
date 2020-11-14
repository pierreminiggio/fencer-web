import React from 'react'
import { Button } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles'
import ButtonProgress from './ButtonProgress'

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
 * @param {Object} props
 * 
 * @returns {JSX.Element}
 */
const DisabledButtonForTooltip = React.forwardRef((props, ref) => {
    const childProps = {...props}
    const text = childProps.text
    delete childProps.text
    const loading = childProps.loading
    delete childProps.loading

    return <div style={divStyle} ref={ref}>
      <DisableableButton {...childProps} disabled>{loading ? <ButtonProgress/> : ''}{text}</DisableableButton>
    </div>
})

export default DisabledButtonForTooltip
