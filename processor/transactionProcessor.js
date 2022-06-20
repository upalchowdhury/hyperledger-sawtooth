const { TransactionProcessor } = require('sawtooth-sdk-js/processor');
const PropertyHandler = require('./handler');

const VALIDATOR_URL = 'tcp://localhost:4004'
const transactionProcessor = new TransactionProcessor(VALIDATOR_URL)


transactionProcessor.addHandler(new PropertyHandler());


transactionProcessor.start();


//Handle Stop Process
process.on('SIGUSR2', () => {
    transactionProcessor._handleShutdown();
})