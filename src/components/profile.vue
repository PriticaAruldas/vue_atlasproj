<template>
<va-app
    bg-color="#F4F5F7"
    page-bg-color="#FFFFFF"
    desktop-margin="0"
    desktop-minimum-width="0"
    desktop-sidebar-width="200"
    desktop-minibar-width="0"
    desktop-topbar-height="0"
    mobile-sidebar-width="0"
    mobile-minibar-width="0"
    mobile-topbar-height="50"
    :rtl="false"
    :reverse="false"
    :split="false"
    :sidebar-priority="false"
    :minibar-priority="false"
    :topbar-priority="false"
    :topbar-padded="false">

    <!-- https://vue-atlas.com/documentation/topbar -->
    <va-topbar theme="blue">
      <div slot="left"> L </div>
      <div slot="center"> C </div>
      <div slot="right"> R </div>
    </va-topbar>

    <!-- https://vue-atlas.com/documentation/minibar -->
    <!-- <va-minibar
      :top-items="[{icon:'home'},{icon:'search'},{icon:'user'}]"
      :bottom-items="[{icon:'question'}]"
      theme="blue" /> -->

    <!-- https://vue-atlas.com/documentation/sidebar -->
    <va-sidebar
      theme="default"
      :compact="false"
      :text-links="false">
      <va-sidebar-group
        :items="Courses"
        :title="'Courses'"
        :show-toggle="false" />
    </va-sidebar>
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
      hover: true,
      Courses: [
        {
          name: 'courses',
          route: '/courses'
        }
      ]
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
