`Client` --> `Rest API based access to TP` --> `Validator`--> `Transaction Processor (TP)` 

https://sawtooth.hyperledger.org/images/1.2/appdev-environment-one-node-3TPs.svg

This compose file creates a validator node, 3 TP node, rest api and shell to execute commands. The compose file has all the necessary network settings for containers to communicate with each other. It creates microservice architecture based application.


The XO Transaction Family itself updates the value which is otherwise maintained/managed by Intkey Transaction Family.

Hyperledger Sawtooth allows to update any global state value. You could update a value in global state as long as you can compute the address where the value needs to be updated.

If you would like to restrict another Transaction Family modifying the values maintained by you then you would want to read on the namespace restriction document here https://sawtooth.hyperledger.org/docs/core/nightly/master/app_developers_guide/namespace_restriction.html


`Transaction family`:
    • A transaction processor to define the businesslogic for your application
    • A data model to record and store data
    • A client to handle the client logic for your application
    • Transaction processor has two components. A    processor class and a handler class
    • Default transaction families

                    block_info
                    sawtooth_identity
                    intkey
                    sawtooth_validator_registry
                    settings-tp
                    smallbank
                    xo


`Transaction creation`
        • Transaction Header Bytes
        • Header signature 
        • payload bytes
Each transaction is an array element in a batch of transactions

All sawtooth signaturs including client-signed transaction and batches use ECDSA curve secp256k1.

`Ledger Sync`
    The state is extracted from the ledger ( leafs of merkle tree) and used for performing queries to data. Using root hash. Data subscribers can be used to create ledger sync.

• Sawtooth validators uses TCP connection and port 8800 to communicate with other nodes.


• After Transaction formation is done in batch, block formation in done in validator node and includes the below info,
            • Block, BatchID, BlockNumber, Consensus, Current hash, prev hash, timestamp, validator public key



