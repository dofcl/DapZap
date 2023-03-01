<script>
import * as fcl from '@onflow/fcl'
import * as t from '@onflow/types'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

const GET_APP_USER = gql`
  query {
    appUser {
      id
      name
      email
      image
      app {
        id
      }
      wallet {
        id
        address
        state
      }
    }
  }
`;

const GET_NFT_MODELS = gql`
  query {
    nftModels {
      id
      blockchainId
      title
      description
      quantity
      status
      rarity
      content {
        files {
          media {
            url
            contentType
          }
          thumbnail {
            url
            contentType
          }
        }
        poster {
          url
        }
      }
    }
  }
`;

const GET_USER_NFTs = gql`
  query {
    nfts {
      id
      model {
        id
        title
      }
    }
  }
`;

const GET_USER_WALLET = gql`
  query {
    wallet {
      id
      address
      state
      verificationCode
    }
  }
`;

const REGISTER_WALLET = gql`
  mutation ($address: String!) {
    registerWallet(address: $address) {
      id
      address
      verificationCode
      state
    }
  }
`;

const VERIFY_WALLET = gql`
  mutation ($address: String!, $signedVerificationCode: JSON!) {
    verifyWallet(
      address: $address
      signedVerificationCode: $signedVerificationCode
    ) {
      id
      address
      state
    }
  }
`;

const READY_WALLET = gql`
  mutation ($address: String!) {
    readyWallet(address: $address) {
      id
      address
      state
    }
  }
`;

// eslint-disable-next-line no-unused-vars
const apolloClient = new ApolloClient({
  uri: 'https://graphql.api.staging.niftory.com' //mainet https://graphql.api.niftory.com
})
export default {
  name: 'niftory',
  components: {ApolloClient},
  apollo: {
    getUser: GET_APP_USER,
    getNFTModels: GET_NFT_MODELS,
    getUserNFTs: GET_USER_NFTs,
    getUserWallet: GET_USER_WALLET,
    registerUserWallet: REGISTER_WALLET,
    verifyUserWallet: VERIFY_WALLET,
    readyUserWallet: READY_WALLET,

  },
  data() {
    return {
      nftList: [],
      address: '',
    }
  },
  methods: {
    async getNFTS(cadenceQuery) {
      console.log('get Nfts')
      const idsResponse = await fcl.send([
        fcl.script`${cadenceQuery}`,
        fcl.args([fcl.arg(this.address, t.Address)]),
      ])
      this.nftList = await fcl.decode(idsResponse)
      console.log(this.nftList)
    },
    getWallet() {
      this.address = gql`
            query {
                wallet {
                  id
                  address
                  state
                  verificationCode
                }
              }`
    }
  }
}
</script>
