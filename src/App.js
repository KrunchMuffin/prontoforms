import React, {Component} from 'react'
// import {render} from 'react-dom';

// import BootstrapProvider from '@bootstrap-styled/provider';
// import {BootstrapProvider} from "@bootstrap-styled/provider/dist/@bootstrap-styled/provider.esm";
import Loading from "./images/loading.gif"
import Countries from "./components/countries";
// import theme from "./theme/theme";
import axios from "axios";
import utils from "./utils";
import Networks from "./components/networks";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            networks: [],
            countryData: [],
            selectedCountry: null,
            isFirstLoad: true,
        };
        // this.handleMapClick = this.handleMapClick.bind(this);
    };

    componentDidMount() {
        axios.get(utils.networks(), {})
            .then(networks => {
                this.setState({
                    networks: networks.data.networks,
                    isLoading: false
                });
            })
            .catch(error => this.setState({error, isLoading: false}));
    }

    render() {
        if (this.state.isLoading) {
            return (
                <img className={"loading-img"} src={Loading} alt={"Loading..."}/>
            )
        } else {
            return (
                // <BootstrapProvider theme={theme}>
                <div className="row grow w-100">
                    <div className="col-12 bg-primary py-3" id={"selectedFlag"}>
                        {/*<SelectedCountryFlag/>*/}
                    </div>
                    <div className="col-1 bg-info text-center" id={"flags"}>
                        <Countries networks={this.state.networks} onClick={this.handleMapClick}
                                   isFirstLoad={this.state.isFirstLoad}/>
                    </div>
                    <div className="main col-8 bg-warning h-100 py-3" id={"main"}>
                        <Networks/>
                    </div>
                </div>
                // </BootstrapProvider>
            );
        }
    }

}


export default App;
