import React, {Component} from "react";

class UserGreeting extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        return this.state.isLoggedIn && <div>Welcome big Mama</div>

        // return (
        //     this.state.isLoggedIn?(
        //         <div>Welcome big mama</div>) : (
        //         <div>Welcome Guest</div>)
        // )


        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome big mama</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>



        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome bit mama</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }

    }
}

export default UserGreeting