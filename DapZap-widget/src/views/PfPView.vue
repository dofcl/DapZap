<!--suppress JSUnusedGlobalSymbols -->
<template>
  <div class="dapzap-login-btn">
    NFTLIST
    {{ nftList }}
  </div>
</template>

<script>

import * as fcl from "@onflow/fcl";
import * as t from '@onflow/types';

const api = "https://rest-mainnet.onflow.org";
fcl.config().put("accessNode.api", api);
//todo move to seperate file, make easy to add into db to add new colelctions via ui
//cadence queries
// eslint-disable-next-line no-unused-vars
const flovatars = `import Flovatar from 0x921ea449dffec68a
pub fun main(address:Address) : [Flovatar.FlovatarData] {
    return Flovatar.getFlovatars(address: address)
}`
// eslint-disable-next-line no-unused-vars
const UFCstrike = `
  import NonFungibleToken from 0x1d7e57aa55817448
  import UFC_NFT from 0x329feb3ab062d289


  pub fun main(address: Address): [UInt64] {
      let account = getAccount(address)

      let collectionRef = account.getCapability(UFC_NFT.CollectionPublicPath).borrow<&{NonFungibleToken.CollectionPublic}>()
          ?? panic("Could not borrow capability from public collection")

    return collectionRef.getIDs()
    }`

export default {
  name: 'LoginView',
  props: {
    fontColor: {
      type: String,
      default: 'black'
    },
    backgroundColor: {
      type: String,
      default: '#eee'
    },

  },
  data() {
    return {
      startLogin: false,
      userAddress: '0x3cbb4897e52fcc31',// '0x2a0eccae942667be',
      collectionToQuery: UFCstrike,
      nftList: [],
    }
  },
  mounted() {
    this.queryNFTcollection(this.collectionToQuery)

  },
  methods: {
    async queryNFTcollection(cadenceQuery) {
      const idsResponse = await fcl.send([
        fcl.script`${cadenceQuery}`,
        fcl.args([fcl.arg(this.userAddress, t.Address)]),
      ])
      this.nftList = await fcl.decode(idsResponse)
      console.log(this.nftList)
    },

  },
}
</script>