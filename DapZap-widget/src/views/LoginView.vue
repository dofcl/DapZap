<template>
  <div class="dapzap-login-btn">
    <div v-if="!address">
      <v-btn @click="startLogin = !startLogin">Login</v-btn>
      <v-dialog
          v-model="startLogin"
          width="auto"
      >
        <v-card class="text-center mx-auto">
          <br>
          <h3 class="text-center mx-auto pa-4 ma-4 d-block pt-8">Login using your Dapper / Flow account.</h3>
          <br>
          <v-card-text>
            <div class="mt-1 mx-auto text-center d-block">
              <v-btn @click="loginDapper" class="ma-2">
                <v-img height="20" width="20"
                       src="https://assets.website-files.com/60796227183fcb19c208916e/611ac35ed3af7095b0e0deee_Dapper.png"/>&nbsp;
                Dapper
              </v-btn>
              <v-btn @click="loginFlow" class="ma-2 pa-2">
                <v-img height="20" width="20"
                       src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjkwMjggMTIuMzAyNEMyMi4zOTEyIDEyLjMwMjQgMTcuOTg3NCAxNC4wNDIgMTQuNjk1MiAxNy4xMjhDMTEuMDg0NCAyMC41MTM3IDguNzk5MiAyNS41MTM4IDcuNDg5MzIgMzAuMjE3M0M2LjYzMTQgMzMuMjk1MyA2LjIwMTY0IDM2LjQ4NzYgNi4yMDE2NCAzOS42ODE0QzYuMjAxNjQgNDAuNjQ3MiA2LjI0MTI5IDQxLjYwNSA2LjMxNzQxIDQyLjU1MTdDNi40MTA5NyA0My43MDMgNy41MzIxNCA0NC41MDA3IDguNjQ4NTUgNDQuMTk5NEM5LjYyMjI0IDQzLjkzNzcgMTAuNjQ2NyA0My43OTY2IDExLjcwMjggNDMuNzk2NkMxMy44NzIyIDQzLjc5NjYgMTUuOTA1MiA0NC4zODY1IDE3LjY0OCA0NS40MTczQzE3LjY5MDggNDUuNDQyNiAxNy43MzIxIDQ1LjQ2OCAxNy43NzQ5IDQ1LjQ5MThDMjAuNjA3MiA0Ny4xODA3IDIzLjk0ODUgNDguMTA4NCAyNy41MTE4IDQ3Ljk4OTVDMzYuODA2MiA0Ny42ODE4IDQ0LjM5OTEgNDAuMTE5MSA0NC43NDE2IDMwLjgyNjJDNDUuMTE1OSAyMC42NTk2IDM2Ljk4NyAxMi4zMDA4IDI2LjkwNDQgMTIuMzAwOEwyNi45MDI4IDEyLjMwMjRaTTI2LjkwMjggMzguMzA4MUMyMi4zOTc1IDM4LjMwODEgMTguNzQ1NCAzNC42NTYgMTguNzQ1NCAzMC4xNTIzQzE4Ljc0NTQgMjUuNjQ4NiAyMi4zOTc1IDIxLjk5NDggMjYuOTAyOCAyMS45OTQ4QzMxLjQwODEgMjEuOTk0OCAzNS4wNjAyIDI1LjY0NyAzNS4wNjAyIDMwLjE1MjNDMzUuMDYwMiAzNC42NTc1IDMxLjQwODEgMzguMzA4MSAyNi45MDI4IDM4LjMwODFaIiBmaWxsPSIjMTRBQUZGIi8+CjxwYXRoIGQ9Ik0xOS41NjM3IDYuNjgyNjFDMTkuNTYzNyA5LjAzNDM2IDE4LjMzMTUgMTEuMjE2NCAxNi4zMDggMTIuNDE1M0MxNS4wMzc4IDEzLjE2ODYgMTMuODQ2OCAxNC4wNTgyIDEyLjc2ODUgMTUuMDcxNUMxMC4zNzU1IDE3LjMxMzkgOC41ODk4NSAyMC4wNjUzIDcuMjY3MjggMjIuNzkyOUM3LjAwNzIxIDIzLjMzMDQgNi4yMDAwMyAyMy4xNDAyIDYuMjAwMDMgMjIuNTQyM1Y2LjY4MjYxQzYuMjAwMDMgMi45OTI0MiA5LjE5MjQ1IDAgMTIuODgyNiAwQzE2LjU3MjggMCAxOS41NjUyIDIuOTkyNDIgMTkuNTY1MiA2LjY4MjYxSDE5LjU2MzdaIiBmaWxsPSIjMDA3NUZGIi8+Cjwvc3ZnPgo="/>&nbsp;
                Blocto
              </v-btn>
              <v-btn @click="loginFlow" class="ma-2 pa-2">
                <v-img height="20" width="20" src="https://lilico.app/images/apple-touch-icon.png"/>&nbsp; Lilico
              </v-btn>
              <v-btn @click="loginFlow" class="ma-2 pa-2">
                <v-img height="20" width="20"
                       src="https://global-uploads.webflow.com/60f008ba9757da0940af288e/632c2260fa63f46494d38c2d_123.jpg"/>&nbsp;
                Flipper
              </v-btn>
              <br>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
    <div v-else>
      <v-chip class="ma-2 mr-2">{{ address }}</v-chip>
      <v-btn class="ma-2 ml-2" @click="logOut">Logout</v-btn>
    </div>
  </div>
</template>

<script>

import * as fcl from "@onflow/fcl";

fcl.config({
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
  "discovery.authn.endpoint": "https://fcl-discovery.onflow.org/api/testnet/authn",
  'discovery.wallet.method': 'POP/RPC',
  'accessNode.api': 'https://access-mainnet-beta.onflow.org',
  'app.detail.title': 'DapZap',
  'app.detail.icon': 'https://dapzap.com/logo.png',
})

export default {
  data() {
    return {
      startLogin: false,
      address: ''
    }
  },
  created() {
  },
  methods: {
    loginFlow() {
      fcl.config({
        "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
      })
      fcl.authenticate()
      this.authenticate()
    },
    loginDapper() {
      fcl.config({
        "discovery.wallet": "https://accounts.meetdapper.com/fcl/authn-restricted",
      })
      this.authenticate()
    },
    authenticate() {
      fcl.authenticate().then(user => {
        this.address = user.addr
        console.log(user)
      })
    },
    logOut() {
      fcl.unauthenticate()
      this.address = ''
    }
  },
}
</script>