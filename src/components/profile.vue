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
     <!--***********************************************************************-->
     <va-row>
       <va-column :xs="12">
          <va-card :elevation="elevation" :padding="padding">
            <div slot="topLeft" class="cardtitle">Profile</div>
            <va-table :hover="hover" :size="size">
              <table>
                <thead>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p class="details" ><strong>NAME</strong></p>
                    </td>
                    <td style="padding-right:289px">
                      <p class="details">Pritica Aruldas</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p class="details"><strong>BIRTHDAY</strong></p>
                    </td>
                    <td>
                      <p class="details">Add Birthday</p>
                    </td>
                  </tr>
                   <tr>
                    <td>
                      <p class="details"><strong>USERNAME</strong></p>
                    </td>
                    <td>
                      <p class="details">Pritica</p>
                    </td>
                  </tr>
                  <tr></tr>
                </tbody>
              </table>
            </va-table>
          </va-card>
          </va-column>
     </va-row>
      <br>
     <va-row>
       <va-column :xs="12">
          <va-card :elevation="elevation" :padding="padding">
            <div slot="topLeft" class="cardtitle">Contact Info</div>
            <va-table :hover="hover" :size="size">
              <table>
                <!-- <thead>
                </thead> -->
                <tbody>
                 <tr>
                    <td>
                      <p class="details"><strong>EMAIL</strong></p>
                    </td>
                    <td>
                      <p class="details">pritica@metapercept.com</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p class="details"><strong>PHONE</strong></p>
                    </td>
                    <td>
                      <p class="details">Add a recovery phone to keep your account secure</p>
                    </td>
                  </tr>
                  <tr></tr>
                </tbody>
              </table>
            </va-table>
          </va-card>
          </va-column>
     </va-row>
    <br>
     <va-row>
       <va-column :xs="12">
          <va-card :elevation="elevation" :padding="padding">
            <div slot="topLeft" class="cardtitle">Choose what others see
            </div>
              <va-table :hover="hover" :size="size">
              <table>
                <!-- <thead>
                </thead> -->
                <tbody>
                 <tr>
                    <td>
                      <p class="details">You decide what personal info you make visible to others across Google services</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p class="details">Go to About Me</p>
                    </td>
                  </tr>
                  <tr></tr>
                </tbody>
              </table>
            </va-table>
          </va-card>
          </va-column>
     </va-row>
    </va-page>

  </va-app>
</template>

<script>
export default {
  data () {
    return {
      elevation: 1,
      padding: 5,
      size: 'lg',
      hover: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.details{
  font-size: 12px;
  padding: 5px;
}
.cardtitle{
  padding: 10px;
  font-size: 25px;
}
</style>
