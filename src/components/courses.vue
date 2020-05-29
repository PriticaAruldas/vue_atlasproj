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
        :items="[{name:'Item1'}]"
        title="Category 1"
        :show-toggle="false" />
      <va-sidebar-group
        :items="[{name:'Item1'}]"
        title="Category 2"
        :show-toggle="false" />
    </va-sidebar>

    <!-- https://vue-atlas.com/documentation/page -->
    <va-page size="lg">
      <va-page-header>
        <div slot="title">
            <span>Courses</span>
        </div>

        <div slot="subtitle">
            <span>Subtitle</span>
        </div>

        <div slot="actions">
            <va-button type="subtle">
            <va-icon type="edit" icon-style="regular" margin="0 7px 0 0"></va-icon>
            Edit
            </va-button>
            <va-button type="subtle" round>
            <va-icon type="star"></va-icon>
            </va-button>
        </div>
      </va-page-header>

      <va-tabs @changed="onTabChange" :cache-lifetime="cacheLifetime">
        <va-tab name="Stream">
            <div class="demoTabContent" style="padding:20px">
                <va-row>
                    <va-column :xs="12">
                        <!-- <va-card :elevation="elevation" :padding="padding">
                            <p style="font-size:25px">Math Classroom 3</p>
                            <hr>
                            <p style="font-size:17px">Class Code</p>
                            <vh style="font-size:15px; padding-right:5px">Meet Link</vh><va-icon type="video"></va-icon>
                        </va-card> -->
                        <va-card :elevation="elevation" :padding="padding">
                            <div slot="topLeft" class="classname"><p>Math Class 3</p></div>
                            <div>
                               <p class="classcode">Class Code</p>
                            </div>
                            <div class="meeticon">
                               <vh class="meetlink">Meet Link</vh><va-icon type="video" color="#1A8A70"></va-icon>
                            </div>
                        </va-card>
                    </va-column>
                </va-row>
                <br>
                <va-row>
                    <va-column :xs="12">
                        <va-card :elevation="elevation" :padding="padding">
                            <div class="input">
                                <va-input icon=user :clearable="clearable" @change="onChange" placeholder="Share something with your class"></va-input>
                            </div>
                        </va-card>
                    </va-column>
                </va-row>
                <br>
                <va-row>
                    <va-column :xs="12">
                        <va-card :elevation="elevation" :padding="padding">
                            <div slot="topLeft" class="heading"><va-icon type="tasks" size="1.5em"></va-icon>
                            <vh class="new-assignment">New Assignment</vh></div>
                            <div slot="topRight">
                                <div class="heading">
                                    <va-icon type="ellipsis-v"></va-icon>
                                </div>
                            </div>
                            <div class="heading">
                                 <va-input :clearable="clearable" @change="onChange" placeholder="Add Your comment.."></va-input>
                            </div>
                        </va-card>
                    </va-column>
                </va-row>
            </div>
        </va-tab>
        <va-tab name="Classwork">
            <div class="demoTabContent">
                <va-row style="padding:20px">
                    <va-column :xs="12">
                        <va-row>
                            <va-column :xs="6">
                                <div style="padding:10px">
                                    <va-tooltip content="Assign Classwork" placement="right" effect="tooltip-fade-right" arrow>
                                        <va-button type="primary"><va-icon type="plus" style="padding:5px"></va-icon>Create</va-button>
                                    </va-tooltip>
                                </div>
                            </va-column>
                            <va-column :xs="6">
                                <div style="padding:10px">
                                    <va-button type="subtle"><va-icon type="video" margin="0 7px 0 0" style="padding:5px"></va-icon>Meet</va-button>
                                     <va-button type="subtle"><va-icon type="folder" margin="0 7px 0 0" style="padding:5px"></va-icon>Class Drive Folder</va-button>
                                </div>
                            </va-column>
                        </va-row>
                        <!-- <va-card :elevation="elevation" :padding="padding"> -->
                            <div slot="topLeft" class="assignmenttitle">
                                <p >Assign Work to Your class Here</p>
                            </div>
                            <div style="padding:10px">
                                <va-icon type="tasks" ></va-icon>
                                <vh>Create Assignments and Questions</vh>
                            </div>
                            <hr>
                            <div style="padding:0px 0px 10px 10px">
                                <va-icon type="list-alt"></va-icon>
                                <vh>Use topics to organize classwork into modules or unit</vh>
                            </div>
                            <hr>
                            <div style="padding:0px 0px 10px 10px">
                                <va-icon type="arrow-alt-circle-down"></va-icon>
                                <vh>Order work the way  you want students to see it</vh>
                            </div>
                            <hr>
                        <!-- </va-card> -->
                    </va-column>
                </va-row>
            </div>
        </va-tab>
        <va-tab name="People">
            <div class="demoTabContent">
                <va-table :hover="hover" :size="size">
                <table>
                    <thead>
                    <tr>
                        <th>Teachers</th>
                        <!-- <th><va-button round type="subtle"><va-icon type="user-plus"></va-icon></va-button></th> -->
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><va-icon :color="color" size="1.5em" type="user-circle"></va-icon><vh class="names">Jeet Patel</vh></td>
                        <td><va-icon type="ellipsis-v"></va-icon></td>
                    </tr>
                    <tr>
                        <td><va-icon :color="color" size="1.5em" type="user-circle"></va-icon><vh class="names">Hemal Mahidhariya</vh></td>
                        <td><va-icon type="ellipsis-v"></va-icon></td>
                    </tr>
                    </tbody>
                </table>
                </va-table>
                <br>
                <va-table :hover="hover" :size="size">
                <table>
                    <thead>
                    <tr>
                        <th>Students</th>
                        <!-- <th><va-button round type="subtle"><va-icon type="user-plus"></va-icon></va-button></th> -->
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <!-- <td><va-icon :color="color" size="1.5em" type="user-circle"></va-icon><vh class="names">Vedantika Ghadage</vh></td>
                        <td><va-icon type="ellipsis-v"></va-icon></td> -->
                    </tr>
                    <tr>
                        <!-- <td><va-icon :color="color" size="1.5em" type="user-circle"></va-icon><vh class="names">Pritica Aruldas</vh></td>
                        <td><va-icon type="ellipsis-v"></va-icon></td> -->
                    </tr>
                    <div style="padding-top:20px">
                    <va-alert :type="type" :title="title" >
                        <p>{{body}}</p>
                    </va-alert>
                    </div>
                    </tbody>
                </table>
                </va-table>
            </div>
        </va-tab>
        <va-tab name="Grades">
            <div class="demoTabContent">
            Content for tab 4
            </div>
        </va-tab>
     </va-tabs>

    </va-page>

  </va-app>
</template>

<script>
export default {
  data () {
    return {
      cacheLifetime: 5,
      elevation: 1,
      padding: 5,
      color: '#C0C1C3',
      clearable: true,
      hover: true,
      size: 'lg',
      type: 'info',
      title: 'Invite',
      body: 'Invite students or give them the class code : IWbtv46'
    }
  },
  methods: {
    onTabChange () {
      console.log('Tab changed')
    },
    onChange () {
      console.log('Changed')
    }
  }
}
</script>

<style scoped>
.input{
    padding: 15px;
}
.heading{
    padding: 10px;
}
.names{
    padding: 10px;
    font-size: 15px;
    padding-bottom: 15px;
    padding-top: 25px;
}
.assignmenttitle{
    padding-bottom:15px;
    padding-left:15px;
    font-size: 20px;
    font-weight:bold;
}
.assignments{
  padding:10px
}
.meetlink{
    padding-right:5px;
}
.new-assignment{
font-size:17px;
padding:5px;
}
.classname{
  padding:10px;
  font-size:20px;
  padding-bottom:20px;
  font-weight:bold;
  color: rgb(70, 70, 134);
}
.classcode{
font-size:15px;
padding:5px 5px 5px 10px;
}
.meeticon{
padding:10px;
}
</style>
