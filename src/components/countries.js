import React from "react";
import Networks from "./networks";

class Countries extends React.Component {
    constructor(props) {
        super(props);

        // this.handleLoadCountryNetworks = this.handleLoadCountryNetworks.bind(this);
        this.handleMapClick = this.handleMapClick.bind(this);
    }

    handleMapClick(country) {
        console.log(country);
        this.setState({
            selectedCountry: country,
            isLoading: false,
            isFirstLoad: false,
        });
        // return (
        //  //   this.props.handleLoadCountryNetworks(country)
        //
        //     <Networks country={this.state.selectedCountry} isFirstLoad={this.props.isFirstLoad}/>
        //
        // )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("cdu ", prevProps, prevProps, snapshot);
    }

    render() {
        if (!this.props.networks || this.props.networks.length === 0) return null;
        // west of 50
        const distinctCountries = this.props.networks.filter(lat => parseFloat(lat.location.latitude) <= 50.00);
        // distinct countries
        const newList = [...new Set(distinctCountries.map(c => c.location.country))];
        newList.sort();

        return (
            <React.Fragment>
                {newList.map((country, index) =>
                    <div key={country + "-" + index}>
                        <img src={"https://www.countryflags.io/" + country.toLowerCase() + "/shiny/64.png"}
                             alt={"Country Flag " + country} className={"img pointer"}
                             onClick={() => this.handleMapClick(country.toLowerCase())}/>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

export default Countries;