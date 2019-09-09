import React, {Component} from 'react'
import AuthUserContext, {withAuthorization} from '../components/Session'
// import { withAuthorization } from '../components/Session/'

class Test extends Component {

    render() {
        return(
            <h1>Hi!</h1>
        )
    }
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(Test)