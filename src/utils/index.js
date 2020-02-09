const networks = () => {
    return 'https://api.citybik.es/v2/networks'
};
const stations = (id) => {
    return 'https://api.citybik.es/v2/networks/' + id
};

export default {networks, stations};