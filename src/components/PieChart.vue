<script>
import { Pie } from "vue-chartjs";
export default {
    extends: Pie,
    props: ["singleOrder"],
    data() {
        return {
            datacollection: {
                labels: this.singleOrder[0].order_items_list.map((food) => {
                    return food.name
                }),
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: [
                            "#3e95cd",
                            "#8e5ea2",
                            "#3cba9f",
                            "#e8c3b9",
                            "#c45850",
                            "#ababab",
                            "#ff00bb",
                        ],
                        data: this.singleOrder[0].order_items_list.map((food) => {
                            return food.total
                        }),
                    },
                ],
            },
            Option: {
                responsive: true,
                maintainAspectRatio: false,
            },
        };
    },
    mounted() {
        this.renderChart(this.datacollection, this.options);
    },
    computed: {
    }
};
</script>