<template>
  <navbar btn-background="bg-gradient-primary"/>
  <div
      class="pt-5 m-3 page-header align-items-start min-vh-50 pb-11 border-radius-lg"
  >
    <span class="mask opacity-6"></span>
    <div class="container">
      <div class="row justify-content-center">
        <div class="mx-auto text-center col-lg-5">
          <h1 class="mt-5 mb-2">Welcome!</h1>
          <p class="text-lead">
            We look forward to helping you on your web3 journey.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
      <div class="mx-auto col-xl-4 col-lg-5 col-md-7">
        <div class="card z-index-0">
          <div class="pt-4 text-center card-header" :style="{
           background: 'linear-gradient(310deg, #17ad37 0%, #98ec2d 100%)'
    }">
            <h5 class="text-white">Sign Up</h5>
          </div>
          <div class="card-body">
            <form role="form" id="register-form"
                  ref="form"
                  @submit.prevent="Register">
              <div class="mb-3">
                <label>Name</label>
                <input
                    v-model="user.displayName"
                    ref="name"
                    id="name"
                    type="text"
                    placeholder="Name"
                    aria-label="Name"
                    class="form-control"
                />
              </div>
              <div class="mb-3">
                <label>Email</label>
                <input
                    v-model="user.email"
                    ref="email"
                    id="email"
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    class="form-control"
                />
              </div>
              <div class="mb-3">
                <label>Password</label>
                <input
                    v-model="user.password"
                    ref="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    class="form-control"
                />
              </div>
              <soft-checkbox
                  id="flexCheckDefault"
                  name="flexCheckDefault"
                  class="font-weight-light"
                  checked
              >
                I agree the
                <a href="javascript:;" class="text-dark font-weight-bolder"
                >Terms and Conditions</a
                >
              </soft-checkbox>

              <div class="text-center">
                <soft-button
                    type="submit"
                    :loading="registerLoading"
                    color="dark"
                    full-width
                    variant="gradient"
                    class="my-4 mb-2"
                >Sign up
                </soft-button
                >
              </div>
              <p class="text-sm mt-3 mb-0">
                Already have an account?
                <router-link
                    :to="{ name: 'Sign In' }"
                    class="text-dark font-weight-bolder"
                >
                  Sign in
                </router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/layouts/PageLayout/Navbar.vue";
import SoftCheckbox from "@/components/SoftCheckbox.vue";
import SoftButton from "@/components/SoftButton.vue";
import {
  mdiAccountRemoveOutline,
} from '@mdi/js';
import firebase from 'firebase/app'
import 'firebase/auth'
import '@/db/init'

import {mapMutations} from "vuex";

export default {
  name: "SignupBasic",
  components: {
    Navbar,
    SoftCheckbox,
    SoftButton,
  },
  data() {
    return {
      user: {},
      registerLoading: false
    }
  },
  created() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
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
        photoURL: '', //require('@/assets/images/avatars/default.png')
      }
    }
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
    Register() {
      this.registerLoading = true
      firebase.auth()
          .createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then(response => {
            response.user.updateProfile({
              displayName: this.user.displayName,
            })
                .then(() => {
                  // clear password
                  this.user.password = ''
                  this.user.isLoggedin = true
                  this.$store
                      .dispatch('signup', this.user)
                      .then(() => {
                        this.$store
                            .dispatch('login', this.user)
                            .then(() => {
                              this.$router.push('/dashboard')
                            })
                            .catch(err => {
                              console.log(err)
                              this.registerLoading = false
                              this.snackbarShow = true
                              this.snackbarIcon = mdiAccountRemoveOutline
                              this.snackbarType = 'error'
                              this.snackbarText = err.message
                            })
                      })
                      .catch(err => {
                        console.log(err)
                        this.registerLoading = false
                        this.snackbarShow = true
                        this.snackbarType = 'error'
                        this.snackbarIcon = mdiAccountRemoveOutline
                        this.snackbarText = err.message
                      })
                })
          })
          .catch(err => {
            console.log(err)
            this.registerLoading = false
            this.snackbarShow = true
            this.snackbarType = 'error'
            this.snackbarIcon = mdiAccountRemoveOutline
            this.snackbarText = err.message
          })
    }
    ,
  }
  ,
};
</script>
