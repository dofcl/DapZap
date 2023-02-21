<template>
  <navbar btn-background="bg-gradient-primary"/>
  <div
      class="pt-5 m-3 page-header align-items-start min-vh-50 pb-11 border-radius-lg"
      :style="{
      backgroundImage:
        'url(' + require('@/assets/img/bg.png') + ')',
    }"
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container">
      <div class="row justify-content-center">
        <div class="mx-auto text-center col-lg-5">
          <h1 class="mt-5 mb-2 text-white">Welcome!</h1>
          <p class="text-white text-lead">
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
          <div class="pt-4 text-center card-header">
            <h5>Sign Up</h5>
          </div>
          <div class="card-body">
            <form role="form">
              <div class="mb-3">
                <soft-input
                    id="name"
                    type="text"
                    placeholder="Name"
                    aria-label="Name"
                />
              </div>
              <div class="mb-3">
                <soft-input
                    id="email"
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                />
              </div>
              <div class="mb-3">
                <soft-input
                    id="password"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
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
import Navbar from "@/examples/PageLayout/Navbar.vue";
import SoftInput from "@/components/SoftInput.vue";
import SoftCheckbox from "@/components/SoftCheckbox.vue";
import SoftButton from "@/components/SoftButton.vue";
import {
  mdiAccountRemoveOutline,
  mdiAccountCheck,
} from '@mdi/js';
import firebase from 'firebase/app'
import 'firebase/auth'

import {mapMutations} from "vuex";

export default {
  name: "SignupBasic",
  components: {
    Navbar,
    SoftInput,
    SoftCheckbox,
    SoftButton,
  },
  data() {
    return {

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
                  this.showSnack = true
                  this.snackbarType = 'success'
                  this.snackbarIcon = mdiAccountCheck
                  this.snackbarText = 'Account successfully created!'

                  // clear password
                  this.user.password = ''
                  this.user.isLoggedin = true
                  this.$store
                      .dispatch('signup', this.user)
                      .then(() => {
                        this.$store
                            .dispatch('login', this.user)
                            .then(() => {
                              this.snackbarShow = true
                              this.snackbarType = 'success'
                              this.snackbarText = 'Login Successful'
                              this.snackbarIcon = mdiAccountCheck
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
    },
  },
};
</script>
