<template>
  <div id="examples">
    <h2>Prebuilt Example Widgets</h2>
    <p>Here are examples of the no-code and low code widgets</p>
    <v-container fluid :style="{fontFamily:fontFamily} ">
      <v-row>
        <v-col cols="4" class="d-flex align-stretch">
          <v-card>
            <v-card-title>Flow/Dapper Authentication</v-card-title>
            <v-card-text>
              <ul>
                <li>Wallet Login/logout</li>
                <li>Prompts to request user's name and email to link to account.</li>
                <li>Optional webhook for storing name,email and PFP in own backend</li>
              </ul>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="float-right">
              Example:
              <LoginView :fontColor="fontColor" :backgroundColor="backgroundColor"></LoginView>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4" class="d-flex align-stretch">
          <v-card>
            <v-card-title>Wallet Sign Up</v-card-title>
            <v-card-text>
              <ul>
                <li>Wallet-less Login/logout</li>
                <li>Creates a wallet and links to email address</li>
                <li>Great for easy onboarding, and connecting to Flow wallets in future.</li>
                <li>Prompts to request user's name and email to link to account.</li>
                <li>Optional webhook for storing name,email and PFP in own backend</li>
              </ul>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="float-right">
              Example:
              <LoginView :fontColor="fontColor" :backgroundColor="backgroundColor"></LoginView>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4" class="d-flex align-stretch">
          <v-card>
            <v-card-title>PFP picker for profile images</v-card-title>
            <v-card-text>
              <ul>
                <li>Gravatar Replacement</li>
                <li>Show all NFTS from user's collection</li>
                <li>Filter to whitelisted collections.</li>
              </ul>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="float-right">
              Example:
              <PfPView :fontColor="fontColor" :backgroundColor="backgroundColor"></PfPView>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid :style="{fontFamily:fontFamily} ">
      <v-row>
        <v-col cols="12">
          <v-divider></v-divider>
          <h2>Widget Theme</h2><br>
          <p>Choose the colors and fonts to match your website</p>
          <v-row>
            <v-col cols="4">
              <h4>Primary Color</h4>
              <v-color-picker
                  v-model="backgroundColor"
                  dot-size="25"
                  swatches-max-height="200"
              ></v-color-picker>
            </v-col>
            <v-col cols="4">
              <h4>Secondary Color</h4>
              <v-color-picker
                  v-model="secondaryColor"
                  dot-size="25"
                  swatches-max-height="200"
              ></v-color-picker>
            </v-col>
            <v-col cols="4">
              <h4>Font</h4>
              <font-picker :api-key="googleFontAPI" :options="options" :active-font="fontFamily"
                           @change="changeFont"></font-picker>
              <br>
              <br>
              <h4>Font Color</h4>
              <v-color-picker
                  v-model="fontColor"
                  dot-size="25"
                  :color="primary"
                  swatches-max-height="200"
              ></v-color-picker>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LoginView from '@/views/LoginView.vue'
import PfPView from '@/views/PfPView.vue'
import FontPicker from 'font-picker-vue';

export default {
  name: 'ExampleView',
  components: {
    LoginView,
    PfPView,
    FontPicker,
  },
  data() {
    return {
      backgroundColor: '#dddddd',
      secondaryColor: '#dddddd',
      fontFamily: '',
      fontColor: '#000000',
      googleFontAPI: 'AIzaSyBvra4sEEa0OI9aZ2yphEidVuW9ot49QkU',
      primary: '#3f51b5',
    }
  },
  created() {
  },
  methods: {
    changeFont(font) {
      this.fontFamily = font.family
    },
  },
}
</script>