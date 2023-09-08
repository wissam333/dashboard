<template>
  <v-app>
    <Navbar></Navbar>
    <router-view></router-view>

  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import { mapState } from 'vuex';
export default {
  name: 'Appp',
  components: {
    Navbar
  },
  //props: {msg: String},
  data() {
    return {

    }
  },
  methods: {
    dis_App_Json: function () {
      this.$store.commit("GetAppJson");
    }
  },
  created() {
    this.dis_App_Json();
  },
  mounted() {
    //this.dis_App_Json();
    this.$vuetify.rtl = true;
    this.$vuetify.lang.current = 'ar';
  },
  watch: {
    // whenever question changes, this function will run

  },
  computed: {
    ...mapState({
      cats: state => state.cats,
      pageview: state => state.pageview
    })
  }
}
</script>