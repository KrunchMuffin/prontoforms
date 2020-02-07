import React, {Component} from 'react'
// import {render} from 'react-dom';

// import BootstrapProvider from '@bootstrap-styled/provider';
import {BootstrapProvider} from "@bootstrap-styled/provider/dist/@bootstrap-styled/provider.esm";
import {
    Card,
    P, H4
} from '@bootstrap-styled/v4';
import Networks from "./components/networks";
import theme from "./theme/theme";
import Axios from "axios";
import utils from "./utils";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            networks: [],
            bikes: []
        };
    }

    componentDidMount = async () => {
        const {data: networks} = await Axios.get(utils.networks());

        // Axios.get(utils.networks(), {})
        //     .then(networks => {
                console.log("foo",networks);
        this.setState({
            networks: networks,
            isLoading: false
        });
                  console.log(this.state);
        //     })
        //     .catch(error => this.setState({ error, isLoading: false }));
    };
    render() {
        //const { networks} = this.state;
        return (
            <BootstrapProvider theme={theme}>
                <div className="row grow w-100">
                    <div className="col-12 bg-primary py-3">
                        Country flag
                    </div>
                    <div className="col-4 bg-info py-3">
                        <Networks networks={this.state.networks} />
                    </div>
                    <div className="main col-8 bg-warning h-100 py-3">
                        <H4>Main</H4>
                        <P className="mb-5">ipsumfoo</P>
                        <Card/>
                    </div>
                </div>
            </BootstrapProvider>

        );
    }

    // async getNetworks() {
    //     // console.log("i am here", this.state);
    //
    // }
}


export default App;
