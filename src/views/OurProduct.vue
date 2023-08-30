
<template>
    <div class="bbbbbb" style=" width: 100vw;">
        <Navbar></Navbar>

        <ul class="shuffle" style="display: flex; width:94%; height: 60px;  max-height: 60px;  align-items: center; justify-content: center; border: 1px solid #ccc; overflow-x: scroll;  overflow-y: hidden;  scroll-snap-type: mandatory;">
            <li v-for="cat in  cats" class="filter-btn" @click="active = cat.id; activeCat = cat.Aname"
                :class="active == cat.id ? 'active' : ''" style="display: flex;flex-wrap: wrap; width:auto; height: 50px; max-height: 50px;margin:auto; overflow: hidden;  align-items: center; justify-content: center;">
                {{ cat.Aname }}44
            </li>
        </ul>

        <div class="products">

            <div class="item" v-show="item.tags.includes(activeCat)" v-for=" item  in  items ">
                <RouterLink :to="{
                    path: '/ItemView',
                    name: 'ItemView',
                    component: ItemView,
                    params: { id: item.id }
                }
                    " class="card">
                    <div class="card-body">
                        <div class="row m-b-30">
                            <div class="col-md-5 col-xxl-12" style="padding: 0;">
                                <div class="new-arrival-product">
                                    <div class="new-arrivals-img-contnent">
                                        <img class="img-fluid" src="../../public/images/card/1.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7 col-xxl-12" style="line-height: 5px;">
                                <div class="new-arrival-content position-relative">
                                    <h4><a href="ecom-product-detail.html">{{ item.name }}</a></h4>
                                    <h6>السعر :</h6>
                                    <p class="price" style="margin-bottom: 16px;">{{ item.price }}$</p>

                                    <h6>البطاقات :</h6>
                                    <p class="badge badge-success light">{{ item.tags }}</p>

                                    <h6>الاضافات المتاحة: </h6>
                                    <div>
                                        <p style="display: inline-block;" v-for=" addons  in  item.addons ">
                                            <span class="badge badge-danger light me-0"> {{ addons.Aname }} </span>
                                        </p>
                                    </div>
                                    <p v-if="!item.addons">لا يوجد اضافات</p>
                                    <br>
                                    <h6>الخيارات المتاحة :</h6>
                                    <p style="display: inline-block;" v-for=" options  in  item.options ">
                                        <span class="badge badge-info light me-0"> {{ options.Aname }} </span>
                                    </p>
                                    <p v-if="!item.options">لا يوجد اضافات</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapState } from 'vuex';
import Navbar from '../components/Navbar.vue'
import { RouterLink } from 'vue-router';

export default {
    name: 'OurProduct',
    components: {
        Navbar,
        RouterLink
    },
    data() {
        return {
            active: 1,
            activeCat: "الكل"
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
            cats: state => state.cats,
            items: state => state.items
        })
    }
}
</script>
<style lang="scss" scoped>
.shuffle {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin-top: 50px;
    margin-bottom: 0 !important;

    li,
    a {
        padding: 10px 20px;
        color: #231f1e;
        font-size: 14px;
        font-weight: 600;
        border: 1px solid #c5c5c5;
        border-radius: 30px;
        margin-right: 10px;
        margin-bottom: 10px;
        text-decoration: none;
        cursor: pointer;

        &.active {
            background-color: #dd2f6e;
            color: #fff;
            border: 1px solid #dd2f6e;
        }
    }
}

.products {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;

    .item {}
}
</style>
  