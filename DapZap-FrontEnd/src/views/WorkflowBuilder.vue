<template>
  <div class="workflow">
    <div class="mt-3 container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="mb-4">
            <div class="row">
              <div class="col-md-3">
                <div class="card">
                  <div class="card-body">
                    <div class="btn-group center">
                      <button class="btn btn-info" type="button" @click="addRandomNode('Trigger')">Add Trigger
                      </button>
                      <button class="btn btn-info" type="button" @click="addRandomNode('Action')">Add Action</button>
                    </div>
                    <div class="card-title">Input Rules:</div>
                    <div class="form-check">
                      <input @click="onTokenChange('NFT')" v-model="ruleSource" class="form-check-input" type="radio"
                             value="NFT"
                             name="flexRadioDefault"
                             id="flexRadioDefault1">
                      <label class="form-check-label" for="flexRadioDefault1">
                        NFT Project
                      </label>
                    </div>
                    <div class="form-check">
                      <input @click="onTokenChange('FT')" v-model="ruleSource" class="form-check-input" type="radio"
                             name="flexRadioDefault"
                             value="FT"
                             id="flexRadioDefault2" checked>
                      <label class="form-check-label" for="flexRadioDefault2">
                        FT Token
                      </label>
                    </div>
                    <div v-if="ruleSource==='NFT'">
                      <div>Project</div>
                      <select v-model="selectedProject" class="form-control">
                        <option disabled value="">Choose NFT Project</option>
                        <option v-for="project in projects" :key="project.name">{{ project.name }}</option>
                      </select>
                    </div>
                    <div v-else-if="ruleSource==='FT'" class="form">
                      <div>Token: {{ selectedProject }}</div>
                      <select v-model="selectedProject" class="form-control">
                        <option disabled value="">Choose FT</option>
                        <option>FLOW</option>
                        <option>USDC</option>
                      </select>
                    </div>
                    <br>
                    <div v-if="ruleSource">
                      <div>On Chain Trigger:</div>
                      <select v-model="selectedRule" class="form-control mt-1 mb-2">
                        <option disabled value="">Choose Trigger</option>
                        <option v-for="rule in rules" :key="rule.name" :value="rule.name">{{ rule.name }}</option>
                      </select>
                      <div>To Address:</div>
                      <input type="text" name="name" id="To Address" v-model="trigger.toAddress"
                             class="form-control mb-2 mt-1"/>
                      <div>From Address:</div>
                      <input type="text" name="name" id="To Address" v-model="trigger.fromAddress"
                             class="form-control mb-2 mt-1"/>
                      <div>Min Price:</div>
                      <input type="text" name="name" id="minPrice" v-model="trigger.minPrice"
                             class="form-control mb-2 mt-1"/>
                      <div>Max Price:</div>
                      <input type="text" name="name" id="maxPrice" v-model="trigger.maxPrice"
                             class="form-control mb-2 mt-1"/>
                      <div>Polling Interval:</div>
                      <div class="row">
                        <div class="col-md-6">
                          <select v-model="trigger.pollPeriod" class="form-control">
                            <option value="Minutes">Minutes</option>
                            <option value="Hours">Hours</option>
                            <option value="Days">Days</option>
                            <option value="Weeks">Weeks</option>
                            <option value="Months">Month</option>
                          </select>
                        </div>
                        <div class="col-md-6">
                          <input type="number" name="name" id="pollInterval" v-model="trigger.pollInterval"
                                 class="form-control mb-2"/>
                        </div>
                      </div>
                      Trigger will be checked every {{ trigger.pollInterval }} {{ trigger.pollPeriod }}.
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card">
                  <div class="card-body">
                    <h6 class="mb-1 mt-0 pt-0">Create a DapZap.</h6>
                    <p class="text-sm">Create an automatic workflows based, based on any on-chain event.</p>
                    <input type="text" name="name" id="name" v-model="dapzap.name" class="form-control mb-4"/>
                    <VueFlow v-model="savedRule"></VueFlow>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card">
                  <div class="card-body">
                    <div class="btn-group center ">
                      <button class="btn btn-success" type="button" @click="addRandomNode">Save</button>
                      <button class="btn btn-primary" type="button" @click="addRandomNode">New DapZap</button>
                    </div>
                    <br>
                    <div class="card-title">Action Setting:</div>
                    <select v-model="selectedActions" class="form-control">
                      <option disabled value="">Choose Action</option>
                      <option v-for="action in actions" :key="action.name" :value="action.code">{{
                          action.name
                        }}
                      </option>
                    </select>
                    <br>
                    <div v-if="selectedActions == 'discord' || selectedActions == 'slack'">
                      <div>To Channel:</div>
                      <input type="text" name="name" id="name" v-model="action.toAddress"
                             class="form-control mb-4 mt-1"/>
                      <div>User Id:</div>
                      <input type="text" name="name" id="name" v-model="action.userID"
                             class="form-control mb-4 mt-1"/>
                    </div>
                    <div v-if="selectedActions == 'email'">
                      <div>To Address:</div>
                      <input type="text" name="name" id="name" v-model="action.toAddress"
                             class="form-control mb-4 mt-1"/>
                    </div>

                    <div>Message:</div>
                    <input type="text" name="name" id="name" v-model="action.message" class="form-control mb-4 mt-1"/>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {VueFlow, useVueFlow} from '@vue-flow/core'

const {nodes, addNodes, addEdges, onConnect} = useVueFlow()

onConnect((params) => addEdges([params]))

const addRandomNode = (name) => {
  const nodeId = (nodes.value.length + 1).toString()
  let y = Number(nodeId) * 80
  let position = {x: 10, y: y}
  if (name == 'Action') {
    position = {x: 10, y: y}
  }
  const newNode = {
    id: nodeId,
    label: `${name}`,
    color: 'blue',
    position: position,
  }

  addNodes([newNode])
}
</script>
<script>
export default {
  name: "workflowbuilder",
  components: {},
  data() {
    return {
      dapzap: {
        name: "DapZap Name",
        description: "DapZap Description",
      },
      selectedRule: '',
      rules: [
        {
          "name": "Bought",
          "code": null
        },
        {
          "name": "Sold",
          "code": null
        },
        {
          "name": "Traded",
          "code": null
        },
        {
          "name": "Staked",
          "code": null
        },
        {
          "name": "Unstaked",
          "code": null
        },
        {
          "name": "Burnt",
          "code": null
        },
      ],
      selectedActions: '',
      actions: [
        {
          "name": "Send Email",
          "code": "email"
        },
        {
          "name": "Send Discord Post",
          "code": 'discord',
        },
        {
          "name": "Sent Tweet",
          "code": 'twitter',
        },
        {
          "name": "Send SMS",
          "code": "sms"
        },
        {
          "name": "Send to Slack",
          "code": "slack"
        },
        {
          "name": "Create CSV",
          "code": "csv"
        },
        {
          "name": "Mark on Calendar",
          "code": "calendar"
        },
        {
          "name": "Mint NFT",
          "code": 'mint'
        },
        {
          "name": "List NFT",
          "code": "list"
        },
        {
          "name": "Custom Webhook",
          "code": "webhook"
        },
      ],
      selectedProject: '',
      projects: [{"name": "Flovatar", "code": null}, {"name": "Flowverse Socks", "code": null}, {
        "name": "Flunks",
        "code": null
      }, {"name": "Niftory", "code": null}, {"name": "Puddle", "code": null}, {
        "name": "FLOAT",
        "code": null
      }, {"name": "Flowverse Socks", "code": null}, {"name": "Hoodlums", "code": null}, {
        "name": "TopShot",
        "code": null
      }, {"name": "UFC Strike", "code": null}, {"name": "La Liga Golazos", "code": null}], // todo move to db
      tokens: ['FLOW', 'USDC', 'DUST', 'THUL'],
      ruleSource: '',
      savedRule: {},
      trigger: {
        toAddress: '',
        fromAddress: '',
        minPrice: null,
        maxPrice: null,
        pollPeriod: 'Minutes',
        pollInterval: 30,
      },
      action: {
        toAddress: '',
        fromAddress: '',
        userID: '',
        channelId: '',
        listPrice: null,
        message: '',
      }
    }
  },
  methods: {
    onTokenChange(value) {
      console.log(value)
      this.ruleSource = value
      this.selectedProject = ''
    }
  }
};
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.15.2/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.15.2/dist/theme-default.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/controls@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/minimap@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/node-resizer@latest/dist/style.css';

.vue-flow {
  margin: auto;
  padding: 20px;
  width: 600px;
  max-width: 95%;
  height: 400px;
  border: 3px solid #a1d04c6b;
  border-radius: 5px;
  background: #c9e07fad;
}

.basicflow.dark {
  background: #57534e;
  color: #fffffb
}

.basicflow.dark .vue-flow__node {
  background: #292524;
  color: #fffffb
}

.basicflow.dark .vue-flow__controls .vue-flow__controls-button {
  background: #292524;
  fill: #fffffb;
  border-color: #fffffb
}

.basicflow.dark .vue-flow__edge-textbg {
  fill: #292524
}

.basicflow.dark .vue-flow__edge-text {
  fill: #fffffb
}

.basicflow .controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px
}

.basicflow .controls button {
  padding: 4px;
  border-radius: 5px;
  font-weight: 600;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, .3);
  box-shadow: 0 5px 10px #0000004d;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center
}

.basicflow .controls button:hover {
  transform: scale(102%);
  transition: .25s all ease
}
</style>