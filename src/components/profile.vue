<template>
<va-app>
    <!-- https://vue-atlas.com/documentation/page -->
    <va-page :size="sm" :article="article">
    <va-page-header>
      <div slot="title">
       User Profile
    </div>
    <div slot="subtitle">
        Basic info, like your name and photo, that you use on Google services
    </div>
    </va-page-header>

    <va-tabs @changed="onTabChange" :cache-lifetime="cacheLifetime">
      <va-tab name="Profile">
        <div class="demoTabContent" style="padding:10px">
          <va-row>
            <va-column :xs="12">
              <va-card :elevation="elevation" :padding="padding">
                <div slot="topLeft" style="padding:10px">Profile</div>
                 <va-column :xs="12" style="padding:10px">
                     <div style="padding:5px"><p>Photo</p></div>
                      <div style="padding:5px">
                        <va-icon type="user-circle" :size="size" :color="color"></va-icon>
                      </div>
                 </va-column>
                  <br>
                 <va-column :xs="12">
                   <va-input
                  :clearable="clearable"
                  buttons
                  :loading="loading"
                  placeholder="Pritica Aruldas"
                  @confirm="inputConfirm"
                  @cancel="inputCancel"
                  v-model="inputText" icon="user">
                </va-input>
                <br>
                <va-input
                :clearable="clearable"
                @change="onChange"
                placeholder="Add Your Birthday"></va-input>
                  <br>
                <va-input icon="user"
                :clearable="clearable"
                @change="onChange"
                placeholder="Pritica"></va-input>
                  <br>
                <va-input icon="envelope"
                :clearable="clearable"
                @change="onChange"
                placeholder="pritica@metapercept.com"></va-input>
                 <br>
                </va-column>
            </va-card>
            </va-column>
          </va-row>
        </div>
      </va-tab>
      <va-tab name="Contact Information">
        <div class="demoTabContent" style="padding:10px">
          <va-row>
            <va-column :xs="12">
              <va-card :elevation="elevation" :padding="padding">
                 <div slot="topLeft" style="padding:10px">Contact Information</div>
                <va-column :xs="12" style="padding:10px">
                <va-input icon="envelope"
                :clearable="clearable"
                @change="onChange"
                placeholder="pritica@metapercept.com"></va-input>
                 <br>
                <va-input icon="phone-alt"
                :clearable="clearable"
                @change="onChange"
                placeholder="Add a recovery phone to keep your account secure"></va-input>
                </va-column>
              </va-card>
            </va-column>
          </va-row>
        </div>
      </va-tab>
      <!-- <va-tab name="Tab 3">
        <div class="demoTabContent">
          Content for tab 3
        </div>
      </va-tab> -->
    </va-tabs>
    </va-page>

  </va-app>
</template>

<script>
export default {
  data () {
    return {
      elevation: 1,
      padding: 5,
      inputText: '',
      loading: false,
      clearable: false,
      size: '7em',
      gutter: 15,
      color: '#090D9A'
    }
  },
  methods: {
    inputConfirm () {
      this.loading = true
      console.log('Doing something with value:', this.inputText)
      setTimeout(() => {
        this.loading = false
        console.log('Finished doing something. Setting loading to false so that the input operation buttons know to disappear.')
      }, 1000)
    },
    inputCancel () {
      console.log('Cancelled')
    },
    onChange () {
      console.log('Changed')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
