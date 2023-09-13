<template>
    <div style="background-color: #eee;">
        <div class="container" v-for="order in singleOrder">
            <div class="container"
                style="display: flex;justify-content: space-between;align-items: center;flex-direction: row-reverse;">
                <RouterLink to="/OrderView">
                    <i class="bi bi-arrow-left-square-fill" style="font-size: 35px;color: #dd2f6e;"></i>
                </RouterLink>
                <h2 style="margin: 0; font-weight: bold;font-size: 30px;">{{ order.order_number }}#</h2>
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
                        <li :class="order.payment_success ? 'pay-done' : 'pay-not-done'">
                            <div :class="order.payment_success ? 'bg-primary' : 'bg-dark'" class="icon "></div>
                            <a class="timeline-panel text-muted" href="#">
                                <h4 class="mb-2 mt-0">Payment Success</h4>
                                <p class="fs-14 mb-0 ">{{ order.order_date }}</p>
                            </a>
                        </li>
                        <li :class="order.order_done ? 'pay-done' : 'pay-not-done'">
                            <div class="icon" :class="order.payment_success ? 'bg-primary' : 'bg-dark'"></div>
                            <a class="timeline-panel text-muted" href="#">
                                <h4 class="mb-2 mt-0">On Delivery</h4>
                                <p class="fs-14 mb-0 ">{{ order.order_date }}</p>
                            </a>
                        </li>
                        <li :class="order.order_done ? 'pay-done' : 'pay-not-done'">
                            <div class="icon" :class="order.order_done ? 'bg-primary' : 'bg-dark'"></div>
                            <a class="timeline-panel text-muted" href="#">
                                <h4 class="mb-2 mt-0">Order Delivered</h4>
                                <p class="fs-14 mb-0 ">{{ order.order_date }}</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <h2 class="my-8">معلومات الزبون</h2>
            <div class="card p-3 d-f" style="flex-direction: row;align-items: center;">
                <img style="border-radius: 50%;margin-left: 10px;" src="https://picsum.photos/75" alt="">
                <div>
                    <div class="name">اسم الزبون : {{ order.customer_name }}</div>
                    <div>الموقع : {{ order.order_address }} </div>
                    <div>طريقه الدفع : {{ order.order_pay_method }}</div>
                </div>
            </div>
            <h2 class="my-8">معلومات الطلب</h2>
            <div class="card p-3">
                <div class="row" style="justify-content: center;">
                    <div class="col-lg-6" style="color: #333;">
                        <div>الملاحظات : {{ order.order_note }}</div>
                        <div>كود الخصم : {{ order.order_discount_code }}</div>
                        <div>الخصم : {{ order.order_discount }}$</div>
                        <div>الضريبة : {{ order.order_vat }}$</div>
                        <div>المجموع الاجمالي : {{ order.order_total }}$</div>
                    </div>
                    <chart class="col-lg-6" :singleOrder="singleOrder" style="height: 400px;width: 400px;cursor: pointer;">
                    </chart>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import chart from "../components/PieChart.vue"
import { mapState } from 'vuex';
import { useRoute } from 'vue-router/composables';
export default {
    name: 'OrderDetails',
    components: {
        chart
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
<style lang="scss" scoped>
.pay-done {
    border-color: #DD2F6E !important;
}

.pay-not-done {
    border-color: #343a40 !important;
}

.widget-timeline-icon li:last-child {
    border-top: 3px solid;
    border-left: none;

    @media (max-width: 575px) {
        border-left: 3px solid;
        border-top: none;
    }

}
</style>





















