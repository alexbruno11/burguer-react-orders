import React from 'react'
import { InputLabel as Label} from './styles'

function InputLabel({children, alignClient }) {
    
return <Label alignClient={alignClient}>{children}</Label>

}

export default InputLabel
