
import React from "react";
import {
    H5,H6,P
} from '@bootstrap-styled/v4';

class Networks extends React.Component {
    render() {
        console.log("wtf", this.props.networks);
        return (
            <React.Fragment>
                {if this.props.networks && this.props.networks.map((network, index) =>
                    <div className="card" key={network.name + "-" + index}>
                        <div className="card-body">
                            <H5 className="card-title">{network.name}</H5>
                            <H6 className="card-subtitle mb-2 text-muted">{network.href}</H6>
                            <P className="card-text">{network.location.country}</P>
                        </div>
                    </div>
                )}
            </React.Fragment>
        );
    }
}
//  const Networks = ({ networks = [] }) => {
// //     console.log("here",networks);
// //function Networks({networks}) {
//     console.log("wtf", networks);
//     return (
//         <React.Fragment>
//             {networks.map(network =>
//                 <div className="card">
//                     <div className="card-body">
//                         <H5 className="card-title">{network.name}</H5>
//                         <H6 className="card-subtitle mb-2 text-muted">{network.href}</H6>
//                         <P className="card-text">{network.location.country}</P>
//                     </div>
//                 </div>
//             )}
//         </React.Fragment>
//     );
// };

export default Networks;