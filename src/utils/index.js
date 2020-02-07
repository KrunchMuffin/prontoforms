const networks=()=> {return 'https://api.citybik.es/v2/networks'};
const stations=(id)=>{return 'http://api.citybik.es/v2/networks/' + id};

export default { networks , stations};