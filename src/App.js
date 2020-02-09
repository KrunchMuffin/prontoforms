import React, {Component} from 'react'
import GlobalStyle from './theme/globalStyle';
import Countries from "./components/countries";
import axios from "axios";
import utils from "./utils";
import Availabilities from "./components/availabilities";
import SelectedCountryFlag from "./components/SelectedCountryFlag";
import Spinner from "./components/common/spinner";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            networks: [],
            selectedCountry: null,
            isFirstLoad: true,
            countryNetworks: [],
        };
        this.handleMapClick = this.handleMapClick.bind(this);
    };

    handleMapClick = (country) => {
        this.setState({
            selectedCountry: country,
            isFirstLoad: false,
            isLoading: true,
        });
        this.fetchStations();
        // filter out by selected country and then sort by city name
        const placeList = this.state.networks.filter(i => i.location.country === country.toUpperCase())
            .sort((a, b) => a.location.city.localeCompare(b.location.city));

        // call each networks' endpoint, loop over all the station data to aggregate results for each city
        const PromiseArr = [];
        for (let i = 0; i < placeList.length; i++) {
            // make sure they have an ID
            // console.log("plid: ", placeList[i].id);
            if (placeList[i]) {
                let url = utils.stations(placeList[i].id);
                PromiseArr.push(
                    axios.get(url)
                        .then(result => new Promise(resolve => resolve(result.data)))
                );
            }
        }
        // concat results from all network endpoint calls
        Promise.all(PromiseArr).then(res => {
            this.setState({
                countryNetworks: this.state.countryNetworks.concat.apply([], res),
                isLoading: false,
            });
        });
    };

    fetchStations() {
        this.setState({loading: true}, () => {
            axios.get(utils.stations(), {})
                .then(networks => {
                    this.setState({
                        networks: networks.data.networks,
                        isLoading: false
                    });
                })
                .catch(error => this.setState({
                    error, isLoading: false
                }));
        });
    }

    componentDidMount() {
        // this.setState({
        //     isLoading: true
        // });
        this.fetchNetworks();
    }

    fetchNetworks() {
        this.setState({isLoading: true}, () => {
            axios.get(utils.networks(), {})
                .then(networks => {
                    this.setState({
                        networks: networks.data.networks,
                        isLoading: false
                    });
                })
                .catch(error => this.setState({error, isLoading: false}));
        });
    }

    render() {
        const loading = this.state.isLoading;
        if (loading) {
            return (
                <React.Fragment>
                    <Spinner/>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <GlobalStyle/>

                    <div className="row">
                        <div className="col-12 bg-primary m-0 p-0" id={"selectedFlag"}>
                            {
                                this.state.selectedCountry ?
                                    <SelectedCountryFlag flag={this.state.selectedCountry}/> : ''
                            }
                        </div>
                        <div className="col-1 text-center" id={"flags"}>
                            <Countries networks={this.state.networks}
                                       mapClick={this.handleMapClick}/>
                        </div>
                        <div className="main col-8 bg-warning h-100 py-3" id={"main"}>
                            <Availabilities cnetworks={this.state.countryNetworks} firstLoad={this.state.isFirstLoad}/>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    }
}


export default App;