export const COURSE_FACTORY_ADDRESS =
  '0xA8c18a59d51Bc87A9Cc4b15274c5E055C891ce20'

export const COURSE_FACTORY_ABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'AdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'beacon',
        type: 'address',
      },
    ],
    name: 'BeaconUpgraded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'creatorId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'courseId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'courseAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'courseName',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'courseSymbol',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'creator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'courseURI',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string[]',
        name: 'courseNFTURIs',
        type: 'string[]',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'certificateBaseURI',
        type: 'string',
      },
    ],
    name: 'CourseCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'allCourses',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'certificateImplementation',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'courseImplementation',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'creatorId',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'courseName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'courseSymbol',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'courseURI',
        type: 'string',
      },
      {
        internalType: 'string[]',
        name: 'courseNFTURIs',
        type: 'string[]',
      },
      {
        internalType: 'string',
        name: 'certificateBaseURI',
        type: 'string',
      },
    ],
    name: 'createCourse',
    outputs: [
      {
        internalType: 'address',
        name: 'course',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'courseId',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'educateBadgeNFT',
    outputs: [
      {
        internalType: 'contract OwlearnEducatorBadge',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'getCourse',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'implementationRegistery',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract OwlearnEducatorBadge',
        name: 'educatorBadgeNFT',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_courseImplementation',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_resourceImplementation',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_certificateImplementation',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'moduleRegisteryAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'implRegisteryAddress',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'moduleRegistery',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proxiableUUID',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'resourceImplementation',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalCourses',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_certificateImplementation',
        type: 'address',
      },
    ],
    name: 'updateCertificateImpl',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_courseImplementation',
        type: 'address',
      },
    ],
    name: 'updateCourseImpl',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract OwlearnEducatorBadge',
        name: 'educatorBadgeNFT',
        type: 'address',
      },
    ],
    name: 'updateEducatorBadge',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'implRegisteryAddress',
        type: 'address',
      },
    ],
    name: 'updateImplmentationRegistery',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'moduleRegisteryAddress',
        type: 'address',
      },
    ],
    name: 'updateModuleRegistery',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_resourceImplementation',
        type: 'address',
      },
    ],
    name: 'updateResourceImpl',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
] as const
