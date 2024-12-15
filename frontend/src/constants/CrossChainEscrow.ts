export const address = "0x5a7512D6b256ED49CBafCd2cD3C3F4AcED2881da"

export const abi = 
[
    {
        "type": "function",
        "name": "acceptEscrow",
        "inputs": [
            {
                "name": "_escrowId",
                "type": "tuple",
                "internalType": "struct Identifier",
                "components": [
                    {
                        "name": "origin",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "blockNumber",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "logIndex",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "timestamp",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "chainId",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            },
            {
                "name": "_escrowData",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "createEscrow",
        "inputs": [
            {
                "name": "_beneficiary",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_deadline",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "escrows",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "depositor",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "beneficiary",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "deadline",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "state",
                "type": "uint8",
                "internalType": "enum CrossChainEscrow.EscrowState"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "nextEscrowId",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "event",
        "name": "EscrowAccepted",
        "inputs": [
            {
                "name": "chainId",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "escrowId",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "beneficiary",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "EscrowCancelled",
        "inputs": [
            {
                "name": "chainId",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "escrowId",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "depositor",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "EscrowCreated",
        "inputs": [
            {
                "name": "chainId",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "escrowId",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "depositor",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "beneficiary",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "deadline",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "EscrowReleased",
        "inputs": [
            {
                "name": "chainId",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "escrowId",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "beneficiary",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "Unauthorized",
        "inputs": []
    }
]