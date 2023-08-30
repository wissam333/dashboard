<template>
  <div class="bbbbbb" style="display: flex; width: 100vw;">
    <Navbar></Navbar>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import About from '../components/About.vue'
import Navbar from '../components/Navbar.vue'
import { RouterLink } from 'vue-router';

export default {
  name: 'Home',
  components: {
    About, Navbar,
    RouterLink
  },
  data() {
    return {

    }
  },
  methods:
  {


  },
  watch:
  {

  },
  computed:
  {
    ...mapState({

    })
  }
}
</script>
