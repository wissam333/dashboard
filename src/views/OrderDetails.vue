<template>
    <div>
        <div class="container" style="background-color: #eee;" v-for="order in singleOrder">
            <div class="container"
                style="display: flex;justify-content: space-between;align-items: center;flex-direction: row-reverse;">
                <RouterLink to="/OrderView">
                    <i class="bi bi-arrow-left-square-fill" style="font-size: 35px;color: #dd2f6e;"></i>
                </RouterLink>
                <h2 style="margin: 0; font-weight: bold;font-size: 30px;">{{ order.order_number }}</h2>
            </div>
            <div class="card container" style="margin-top: 1rem;">
                <div class="widget-timeline-icon">
                    <ul class="timeline">
                        <li>
                            <div class="icon bg-primary"></div>
                            <a class="timeline-panel text-muted" href="#">
                                <h4 class="mb-2 mt-0">Order Created</h4>
                                <p class="fs-14 mb-0 ">{{ order.order_date }}</p>
                            </a>
                        </li>
                        <li>
                            <div class="icon bg-primary"></div>
                            <a class="timeline-panel text-muted" href="#">
                                <h4 class="mb-2 mt-0">Payment Success</h4>
                                <p class="fs-14 mb-0 ">{{ order.order_date }}</p>
                            </a>
                        </li>
                        <li class="border-dark">
                            <div class="icon bg-primary"></div>
                            <a class="timeline-panel text-muted" href="#">
                                <h4 class="mb-2 mt-0">On Delivery</h4>
                                <p class="fs-14 mb-0 ">{{ order.order_date }}</p>
                            </a>
                        </li>
                        <li>
                            <div class="icon bg-dark"></div>
                            <a class="timeline-panel text-muted" href="#">
                                <h4 class="mb-2 mt-0">Order Delivered</h4>
                                <p class="fs-14 mb-0 ">{{ order.order_date }}</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapState } from 'vuex';
import { useRoute } from 'vue-router/composables';
export default {
    name: 'OrderDetails',
    components: {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    created() {

    },
    mounted() {
    },
    watch: {

    },
    computed: {
        ...mapState({
            orders: state => state.Order_List
        }),

        singleOrder: (state) => {
            const route = useRoute()
            return state.orders.filter((item) => {
                if (item.order_id == route.params.id) {
                    return item
                }
            })
        }
    }
}
</script>





















