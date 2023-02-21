<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar
            is-blur="blur blur-rounded my-3 py-2 start-0 end-0 mx-4 shadow"
            btn-background="bg-gradient-success"
            :dark-mode="true"
        />
      </div>
    </div>
  </div>
  <main class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-8 card card-plain">
                <div class="pb-0 card-header text-start">
                  <h3 class="font-weight-bolder text-success text-gradient">
                    Welcome back
                  </h3>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <form role="form" class="text-start" @submit.prevent="login">
                    <label>Email</label>
                    <input
                        v-model="user.email"
                        ref="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        class="form-control"
                    />
                    <label>Password</label>
                    <input
                        v-model="user.password"
                        ref="password"
                        id="password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        class="form-control"
                    />
                    <soft-switch id="rememberMe" name="rememberMe" checked>
                      Remember me
                    </soft-switch>
                    <soft-button
                        type="submit"
                        class="my-4 mb-2"
                        variant="gradient"
                        color="success"
                        full-width
                    >Sign in
                    </soft-button>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Don't have an account?
                    <router-link
                        :to="{ name: 'Sign Up' }"
                        class="text-success text-gradient font-weight-bold"
                    >Sign up
                    </router-link
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import SoftSwitch from "@/components/SoftSwitch.vue";
import SoftButton from "@/components/SoftButton.vue";
import firebase from 'firebase/app'
import 'firebase/auth'
import '@/db/init'

const body = document.getElementsByTagName("body")[0];
import {mapMutations} from "vuex";

export default {
  name: "SignIn",
  components: {
    Navbar,
    SoftSwitch,
    SoftButton,
  },
  data() {
    return {
      user: {},
    }
  },
  created() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.add("bg-gray-100");
  },
  mounted() {
    if (this.$store.state.user?.isLoggedin) {
      this.user = this.$store.state.user
      this.$router.push('/dashboard')
    } else {
      this.user = {
        displayName: '',
        email: '',
        password: '',
        isLoggedin: false,
        photoURL: '', // require('@/assets/images/avatars/default.png')
      }
    }
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
    login() {
      this.user.email = this.$refs.email.value
      this.user.password = this.$refs.password.value
      firebase.auth()
          .signInWithEmailAndPassword(this.user.email, this.user.password)
          .then(user => {
            this.user.password = '' // clear password
            this.user = user
            this.user.isLoggedin = true
            this.$store
                .dispatch('login', this.user)
                .then(() => {
                  this.snackbarShow = true
                  this.snackbarType = 'success'
                  this.snackbarText = 'Login Successful'
                })
                .catch(err => {
                  console.log(err)
                  this.loginLoading = false
                  this.snackbarShow = true
                  this.snackbarType = 'error'
                  this.snackbarText = err.message
                })
          })
          .catch(err => {
            console.log(err)
            this.loginLoading = false
            this.snackbarShow = true
            this.snackbarType = 'error'
            this.snackbarText = err.message
          })
    },
  },
};
</script>
