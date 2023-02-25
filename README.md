# DapZap

A DapZap is suit of tools to:

a) Bridge web2 <-> web3:
Simple APIs and Drop-In widgets to connect exisiting web2 project to the flow/dapper ecoystem

b) Make is really easy to integrate web3 projects with each other

c) An attempt to create a standardised interoperability scheme around actions,actors and outcomes for web3 projects

## Problems DapZap solves

# FrontEnd

# Install

Main requirements

- Node 16
- Vue3
- Vuetify 3

`npm install`

### local

`npm run dev`

Theme using Vuetify 3 & Soft UI from https://www.creative-tim.com/product/vue-soft-ui-dashboard

# BackendEnd

## DapZap Widget

JS embed into any website for no code functions
Boiler plate
from: https://itnext.io/vuidget-how-to-create-an-embeddable-vue-js-widget-with-vue-custom-element-674bdcb96b97

## hosting

Hosted using Cloudlare push using wrangler
`wrangler login`

### Deploy

`npm run build`

### Deploy

`npx wrangler pages publish dist`
