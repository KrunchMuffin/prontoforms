import React from "react"

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
       console.log(error, errorInfo);
    }

    render() {

        // Render children if there's no error
        return this.props.children;
    }
}

export default ErrorBoundary