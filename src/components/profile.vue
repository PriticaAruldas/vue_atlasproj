<template>
<va-app>
    <va-page :size="sm" :article="article">
      <section>
    <va-page-header>
      <div slot="title">
       User Profile
    </div>
    <div slot="subtitle">
        Basic Account info, Classroom Profile
    </div>
    <div slot="actions">
      <div>
        <img data-v-073e276e="" src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s72-fbw=1/photo.jpg" style="width: 50px; height: 50px; border-radius: 50%; vertical-align: bottom;">
      </div>
  </div>
    </va-page-header>
     <!--***********************************************************************-->
     <va-row>
       <va-column :xs="12">
          <va-card :elevation="elevation" :padding="padding">
            <div style="background-color:#f3f4f6;">
            <div slot="topLeft" class="cardtitle" >
              <span class="profile_heading">Profile</span>
              </div>
            </div>
            <va-table :hover="hover" :size="size">
              <table>
                <thead>
                </thead>
                <tbody>
                  <tr>
                    <td class="detail_label">
                      <va-lozenge :uppercase="uppercase" size="sm" class="label">NAME</va-lozenge>
                    </td>
                    <td class="profiledetail">
                      <p class="details">Pritica</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="detail_label">
                      <va-lozenge :uppercase="uppercase" size="sm" class="label">FULL NAME</va-lozenge>
                    </td>
                    <td class="profiledetail">
                      <p class="details">Pritica Aruldas</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="detail_label">
                      <va-lozenge :uppercase="uppercase" size="sm" class="label">EMAIL</va-lozenge>
                    </td>
                    <td class="profiledetail">
                      <p class="details">pritica.m.aruldas@gmail.com</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="detail_label">
                      <span><va-lozenge :uppercase="uppercase" size="sm" class="label">CLASSROOM UID</va-lozenge></span>
                    </td>
                    <td class="profiledetail">
                      <p class="details">12333333335423445</p>
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
            <div style="background-color:#f3f4f6;">
            <div slot="topLeft" class="cardtitle" >
              <span class="profile_heading">Account Info</span>
              </div>
            </div>
            <va-table :hover="hover" :size="size">
              <table>
                <thead>
                </thead>
                <tbody>
                  <tr>
                    <td class="detail_label">
                      <va-lozenge :uppercase="uppercase" size="sm" type="default" class="label">NAME</va-lozenge>
                    </td>
                    <td>
                      <p class="details">Pritica Aruldas</p>
                    </td>
                  </tr>
                 <tr>
                    <td class="detail_label">
                      <va-lozenge :uppercase="uppercase" size="sm" type="default" class="label">BIRTHDAY</va-lozenge>
                    </td>
                    <td>
                      <p class="details" style="font-style: italic">Add Birthday</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="detail_label">
                      <va-lozenge :uppercase="uppercase" size="sm" type="default" class="label">PHONE</va-lozenge>
                    </td>
                    <td>
                      <p class="details" style="font-style: italic">Add a recovery phone to keep your account secure</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="detail_label">
                      <va-lozenge :uppercase="uppercase" size="sm" type="default" class="label">STATUS</va-lozenge>
                    </td>
                    <td>
                     <va-lozenge :uppercase="uppercase" size="sm" type="success">VERIFIED</va-lozenge>
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
            <div style="background-color:#f3f4f6;">
            <div slot="topLeft" class="cardtitle" >
              <span class="profile_heading">Other Info</span>
              </div>
            </div>
              <va-table :hover="hover" :size="size">
              <table>
                <thead>
                </thead>
                <tbody>
                 <tr>
                    <td class="detail_label">
                      <va-lozenge :uppercase="uppercase" size="sm" type="default" class="label">JOIN DATE</va-lozenge>
                    </td>
                    <td >
                      <p class="details">Friday,May 29th 2020</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="detail_label">
                      <va-lozenge :uppercase="uppercase" size="sm" type="default" class="label">LAST LOGIN</va-lozenge>
                    </td>
                    <td >
                      <p class="details">5 hours ago</p>
                    </td>
                  </tr>
                  <tr></tr>
                </tbody>
              </table>
            </va-table>
          </va-card>
          </va-column>
     </va-row>
     </section>
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
      uppercase: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.details{
  font-size: 12px;
  padding: 5px ;
}
.cardtitle{
  /* padding: 0 10px 10px 0; */
  padding-bottom:5px;
  font-size: 25px;
}
.profile_heading{
  font-size:0.9rem;
  padding: 0 10px;
  font-weight: 500;
}
.va-table{
  margin:0;
  table-layout: auto;
  padding: 10px;
}
.va-lozenge.va-lozenge-default{
 background: transparent;
}
.detail_label{
  width: 120px;
}
.profiledetail{
  /* column-width:450px; */
  word-break:break-word;
  /* display: -webkit-box; */
}
.label{
  padding-bottom: 5px;
}
</style>
