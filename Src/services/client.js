const clients = require('../storage/clients.json')

const getClient = (name) => {
    return clients.find(client => client.name === name);
}

const getValueWithDiscount = (value, discount) => {
    return (value * (100 - discount)) / 100;
}

module.exports = { getClient, getValueWithDiscount }