<template>
  <div class="" style="width: 100vw;">
    <div class="card-body p-0">
      <canvas id="widgetChart1" height="75"></canvas>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import "vue-chartjs"
export default {
  name: 'Home',
  components: {
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
