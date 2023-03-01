<script>
export default {
  name: "niftory",
  components: {},
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
