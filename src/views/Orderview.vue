<template>
    <div style="width: 100vw;">
        <Navbar></Navbar>
        
    </div>
</template>
  
<script>
import { mapState } from 'vuex';
import Navbar from '../components/Navbar.vue'


export default {
    name: 'Home',
    components: {
        Navbar,
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
  