
<template>
    <div class="bbbbbb" style=" width: 100vw; background-color: #eee;">
        <!-- Slider main container -->
        <div ref="swiper" class="shuffle">
            <!-- Additional required wrapper -->
            <ul class="swiper-wrapper">
                <!-- Slides -->
                <li class="swiper-slide filter-btn" v-for="cat in  cats" @click="active = cat.id; activeCat = cat.Aname"
                    :class="active == cat.id ? 'active' : ''">
                    {{ cat.Aname }}
                </li>
            </ul>

        </div>

        <!-- <ul class="shuffle"
            style="display: flex; width:94%; height: 60px;  max-height: 60px;  align-items: center; justify-content: center; border: 1px solid #ccc; overflow-x: scroll;  overflow-y: hidden;  scroll-snap-type: mandatory;">
            <li v-for="cat in  cats" class="filter-btn" @click="active = cat.id; activeCat = cat.Aname"
                :class="active == cat.id ? 'active' : ''"
                style="display: flex;flex-wrap: wrap; width:auto; height: 50px; max-height: 50px;margin:auto; overflow: hidden;  align-items: center; justify-content: center;">
                {{ cat.Aname }}44
            </li>
        </ul> -->

        <div class="products container">

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
                            <div class="col-xxl-12" style="padding: 0;">
                                <div class="new-arrival-product">
                                    <div class="new-arrivals-img-contnent">
                                        <img class="img-fluid" style="width: 100%;height: 130px;" :src="item.img" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-12" style="line-height: 5px;">
                                <div class="new-arrival-content position-relative">
                                    <h4 style="margin-top: 20px;"><a href="ecom-product-detail.html">{{ item.name }}</a>
                                    </h4>
                                    <h6>السعر :</h6>
                                    <p class="price" style="margin-bottom: 16px; width: 100%;">{{ item.price }}$</p>

                                    <h6>البطاقات :</h6>
                                    <p class="badge badge-success light">{{ item.tags }}</p>

                                    <h6>الاضافات المتاحة: </h6>
                                    <div>
                                        <p style="display: inline-block;" v-for=" addons  in  item.addons ">
                                            <span class="badge badge-danger light me-0"> {{ addons.Aname }} </span>
                                        </p>
                                        <p v-if="item.addons.length == 0">لا يوجد اضافات</p>
                                    </div>
                                    <br>
                                    <h6>الخيارات المتاحة :</h6>
                                    <p style="display: inline-block;" v-for=" options  in  item.options ">
                                        <span class="badge badge-info light me-0"> {{ options.Aname }} </span>
                                    <p v-if="item.options.length == 0">لا يوجد اضافات</p>
                                    </p>
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
import { RouterLink } from 'vue-router';
//swiper
import Swiper from 'swiper'
import 'swiper/css'

export default {
    name: 'OurProduct',
    components: {
        RouterLink,
    },
    data() {
        return {
            active: 1,
            activeCat: "الكل"
        }
    },
    mounted() {
        new Swiper(this.$refs.swiper, {
            loop: false,

            scrollbar: {
                el: '.swiper-scrollbar',
            },
            centerInsufficientSlides: true,
            slidesPerView: 'auto',
        })
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
            items: state => state.items,
        })
    }
}
</script>
<style lang="scss" scoped>
.products {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
}

.shuffle {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin-top: 30px;
    margin-bottom: 20px !important;

    li {
        padding: 10px 20px;
        width: 100px;
        color: #231f1e;
        font-size: 14px;
        font-weight: 600;
        background-color: #fff;
        border: 1px solid #fff;
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
</style>
  