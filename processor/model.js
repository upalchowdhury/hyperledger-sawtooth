const crypto = require('crypto')

const hash = (x) =>
    crypto.createHash('sha512').update(x).digest('hex').toLowerCase()


exports.actions = {
    register_property: 'register_property',
    approve_property: 'approve_property',
    reject_property: 'reject_property',
    purhcase: 'purhcase',
    put_on_sale: 'put_on_sale',
    pull_off_sale: 'pull_off_sale',
}


exports.namespace = {
    vin: hash('propertyID').substring(0,2)
}

exports.family = {
    name: 'propertysell',
    namespace: hash('propertysell').substring(0,6),
    version: '1.0'
}