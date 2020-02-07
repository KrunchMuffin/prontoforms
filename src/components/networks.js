import React from "react";

class Networks extends React.Component {
    constructor(props) {
        super(props);
        console.log("props: ", this.props);
        //console.log("new state: ",this.props.isFirstLoad);
    }

    render() {
        return (
            <React.Fragment>
                <div className="card" {...this.props}>
                    <div className="card-body">
                        This is some text within a card body.
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Networks;