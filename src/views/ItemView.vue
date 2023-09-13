<template>
    <div style="width: 100vw;">
        <div class="card" v-for="item in singleItem" style="background-color: #eee;">
            <RouterLink to="/">
                <i class="bi bi-arrow-left-square-fill"
                    style="font-size: 35px;display: flex;padding: 0px 15px;justify-content: flex-end;align-items: center;margin-top: 10px;margin-bottom: -15px;color: #dd2f6e;"></i>
            </RouterLink>
            <div class="card-body">
                <div class="row">
                    <div class="col-xl-3 col-lg-6  col-md-6 col-xxl-5 ">
                        <!-- Tab panes -->
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                                aria-labelledby="home-tab" tabindex="0">
                                <img class="rounded w-100" height="200" :src="item.img" alt="">
                            </div>
                            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                                tabindex="0">
                                <img class="rounded w-100" height="200" src="../../public/images/card/2.png" alt="">
                            </div>
                            <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab"
                                tabindex="0">
                                <img class="rounded w-100" height="200" src="../../public/images/card/3.png" alt="">
                            </div>
                            <div class="tab-pane fade" id="end-tab-pane" role="tabpanel" aria-labelledby="end-tab"
                                tabindex="0">
                                <img class="rounded w-100" height="200" src="../../public/images/card/1.png" alt="">
                            </div>

                        </div>
                        <ul class="nav nav-tabs slide-item-list mt-3" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a href="#first" class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                    data-bs-target="#home-tab-pane" role="tab" aria-controls="home-tab-pane"
                                    aria-selected="true"><img class="me-2 rounded w-100" :src="item.img" alt="" width="80"
                                        height="60"></a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a href="#second" class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                    data-bs-target="#profile-tab-pane" role="tab" aria-controls="profile-tab-pane"
                                    aria-selected="false"><img class="me-2 rounded w-100"
                                        src="../../public/images/card/1.png" alt="" width="80" height="60"></a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a href="#third" class="nav-link" id="contact-tab" data-bs-toggle="tab"
                                    data-bs-target="#contact-tab-pane" role="tab" aria-controls="contact-tab-pane"
                                    aria-selected="false"><img class="me-2 rounded w-100"
                                        src="../../public/images/card/2.png" alt="" width="80" height="60"></a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a href="#for" class="nav-link" id="end-tab" data-bs-toggle="tab"
                                    data-bs-target="#end-tab-pane" role="tab" aria-controls="end-tab-pane"
                                    aria-selected="false"><img class="me-2 rounded w-100"
                                        src="../../public/images/card/3.png" alt="" width="80" height="60"></a>
                            </li>

                        </ul>
                    </div>
                    <!--Tab slider End-->
                    <div class="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-12">
                        <div class="product-detail-content">
                            <!--Product details-->
                            <div class="new-arrival-content" style="background-color: #fff; padding: 30px;">
                                <input type="text" style="font-size: 20px;margin-bottom: 16px;" v-model="item.name">
                                <h6>السعر :</h6>
                                <div style="width: 100%;height: 45px;">
                                    <span class="price">$</span><input type="number" class="price"
                                        style="margin-bottom: 16px;" v-model="item.price">
                                </div>
                                <h6>البطاقات :</h6>
                                <input type="text" style="margin: 0px 0px 16px 0;" v-model="item.tags">

                                <h6>الاضافات المتاحة: </h6>
                                <div style="display: inline-block;" v-for="(addons, key) in item.addons">
                                    <span class="badge badge-danger light me-1" style="font-size: 12px;"> <span
                                            @click="item.addons.splice(key, 1)">
                                            <i class="bi bi-trash-fill"
                                                style="padding: 6.5px;margin-left: 10px;margin-right: -10px;background: #dd2f6e;font-size: 12px;border-radius: 50%;color: #fff;"></i></span>{{
                                                    addons.Aname }} </span>
                                </div>
                                <p v-if="item.addons.length == 0">لا يوجد اضافات</p>
                                <!-- add addons -->
                                <button v-if="!editAddons" class="btn btn-success" @click="editAddons = true"
                                    style="padding: 5px 16px;margin: 20px;">Add</button>

                                <button v-if="editAddons" class="btn btn-success" @click="saveAddons(); editAddons = false"
                                    style="padding: 5px 16px;margin: 20px;">Save</button>

                                <div v-show="editAddons" id="Add"
                                    style="padding: 16px;display: flex;flex-direction: column;">
                                    <input type="text" v-model="addonsAname" name="" id="Aname"
                                        placeholder="Type Arabic Name">
                                    <input type="text" v-model="addonsEname" name="" id="Ename"
                                        placeholder="Type English Name">
                                    <input type="number" v-model="addonsPrice" id="Price" placeholder="Type Price">
                                </div>

                                <br>

                                <h6>الخيارات المتاحة :</h6>
                                <div style="display: inline-block;" v-for="(option, key) in item.options">
                                    <span class="badge badge-info light me-1" style="font-size: 12px;"> <span
                                            @click="item.options.splice(key, 1)"><i class="bi bi-trash-fill"
                                                style="padding: 6.5px;margin-left: 10px;margin-right: -10px;font-size: 12px;background: rgb(47 76 221);border-radius: 50%;color: #fff;"></i></span>
                                        {{ option.Aname }} </span>
                                </div>
                                <p v-if="item.options.length == 0">لا يوجد اضافات</p>
                                <!-- add options -->
                                <button v-if="!editOptions" class="btn btn-success" @click="editOptions = true"
                                    style="padding: 5px 16px;margin: 20px;">Add</button>

                                <button v-if="editOptions" class="btn btn-success"
                                    @click="saveOptions(); editOptions = false"
                                    style="padding: 5px 16px;margin: 20px;">Save</button>

                                <div v-show="editOptions" id="Add"
                                    style="padding: 16px;display: flex;flex-direction: column;">
                                    <input type="text" v-model="optionsAname" name="" id="Aname"
                                        placeholder="Type Arabic Name">
                                    <input type="text" v-model="optionsEname" name="" id="Ename"
                                        placeholder="Type English Name">
                                    <input type="number" v-model="optionsPrice" id="Price" placeholder="Type Price">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
  
<script>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router/composables';
import { mapState } from 'vuex';

export default {
    name: 'ItemView',
    components: {
        RouterLink
    },
    data() {
        return {
            //addons
            editAddons: false,
            addonsAname: '',
            addonsEname: '',
            addonsPrice: '',
            //options  
            editOptions: false,
            optionsAname: '',
            optionsEname: '',
            optionsPrice: '',
        }
    },
    methods:
    {
        saveOptions: function () {
            if (this.optionsAname.length != '' && this.optionsEname != '' && this.optionsPrice != '') {
                this.singleItem.forEach((item) => {
                    item.options.push({
                        Aname: this.optionsAname,
                        Ename: this.optionsEname,
                        price: this.optionsPrice,
                        id: this.singleItem[0].options[this.singleItem[0].options.length - 1].id + 1,
                        check: false
                    })
                })
                this.optionsAname = '';
                this.optionsEname = '';
                this.optionsPrice = '';
            }

        },
        saveAddons: function () {
            if (this.addonsAname.length != '' && this.addonsEname != '' && this.addonsPrice != '') {
                this.singleItem.forEach((item) => {
                    item.addons.push({
                        Aname: this.addonsAname,
                        Ename: this.addonsEname,
                        price: this.addonsPrice,
                        id: this.singleItem[0].addons[this.singleItem[0].addons.length - 1].id + 1,
                        check: false
                    })
                })
                this.addonsAname = '';
                this.addonsEname = '';
                this.addonsPrice = '';
            }
        },

    },
    watch:
    {

    },
    computed:
    {
        ...mapState({
            items: state => state.items
        }),

        singleItem: (state) => {
            const route = useRoute()
            return state.items.filter((item) => {
                if (item.id == route.params.id) {
                    return item
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
img {
    border: 10px solid #fff !important;
}

#Add {
    background: #dd2f6e;
    border-radius: 12px;

    input {
        caret-color: #fff;
        color: #fff;

        &::placeholder {
            opacity: 0.6;
            color: #fff;
        }
    }
}

.active {
    background: transparent !important;
}
</style>
  