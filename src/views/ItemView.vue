<template>
    <div style="width: 100vw;">
        <div class="card" v-for="item in singleItem">
            <div class="card-body">
                <div class="row">
                    <div class="col-xl-3 col-lg-6  col-md-6 col-xxl-5 ">
                        <!-- Tab panes -->
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                                aria-labelledby="home-tab" tabindex="0">
                                <img class="img-fluid rounded " src="../../public/images/card/1.png" alt="">
                            </div>
                            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                                tabindex="0">
                                <img class="img-fluid  rounded" src="../../public/images/card/1.png" alt="">
                            </div>
                            <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab"
                                tabindex="0">
                                <img class="img-fluid rounded" src="../../public/images/card/1.png" alt="">
                            </div>
                            <div class="tab-pane fade" id="end-tab-pane" role="tabpanel" aria-labelledby="end-tab"
                                tabindex="0">
                                <img class="img-fluid rounded" src="../../public/images/card/1.png" alt="">
                            </div>

                        </div>
                        <ul class="nav nav-tabs slide-item-list mt-3" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a href="#first" class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                    data-bs-target="#home-tab-pane" role="tab" aria-controls="home-tab-pane"
                                    aria-selected="true"><img class="img-fluid me-2 rounded"
                                        src="../../public/images/card/1.png" alt="" width="80"></a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a href="#second" class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                    data-bs-target="#profile-tab-pane" role="tab" aria-controls="profile-tab-pane"
                                    aria-selected="false"><img class="img-fluid me-2 rounded"
                                        src="../../public/images/card/1.png" alt="" width="80"></a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a href="#third" class="nav-link" id="contact-tab" data-bs-toggle="tab"
                                    data-bs-target="#contact-tab-pane" role="tab" aria-controls="contact-tab-pane"
                                    aria-selected="false"><img class="img-fluid me-2 rounded"
                                        src="../../public/images/card/1.png" alt="" width="80"></a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a href="#for" class="nav-link" id="end-tab" data-bs-toggle="tab"
                                    data-bs-target="#end-tab-pane" role="tab" aria-controls="end-tab-pane"
                                    aria-selected="false"><img class="img-fluid me-2 rounded"
                                        src="../../public/images/card/1.png" alt="" width="80"></a>
                            </li>

                        </ul>
                    </div>
                    <!--Tab slider End-->
                    <div class="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-12">
                        <div class="product-detail-content">
                            <!--Product details-->
                            <div class="new-arrival-content mt-md-0 mt-3 pr">
                                <input type="text" style="font-size: 20px;margin-bottom: 16px;" v-model="item.name">
                                <h6>السعر :</h6>
                                <span class="price">$</span><input type="number" class="price" style="margin-bottom: 16px;"
                                    v-model="item.price">
                                <h6>البطاقات :</h6>
                                <input type="text" style="margin: 0px 0px 16px 0;" v-model="item.tags">

                                <h6>الاضافات المتاحة: </h6>
                                <div style="display: inline-block;" v-for="(addons, key) in item.addons">
                                    <span class="badge badge-danger light me-1"> <span
                                            @click="item.addons.splice(key, 1)">$%</span>{{ addons.Aname }} </span>
                                </div>
                                <!-- add addons -->
                                <button v-if="!editAddons" class="btn btn-success" @click="editAddons = true"
                                    style="padding: 5px 16px;margin: 20px;">Add</button>

                                <button v-if="editAddons" class="btn btn-success" @click="saveAddons(); editAddons = false"
                                    style="padding: 5px 16px;margin: 20px;">Save</button>

                                <div v-show="editAddons" id="AddOptions"
                                    style="padding: 16px;display: flex;flex-direction: column;">
                                    <input type="text" v-model="addonsAname" name="" id="Aname"
                                        placeholder="Type Arabic Name">
                                    <input type="text" v-model="addonsEname" name="" id="Ename"
                                        placeholder="Type English Name">
                                    <input type="number" v-model="addonsPrice" id="Price" placeholder="Type Price">
                                </div>
                                <p v-if="!item.addons">لا يوجد اضافات</p>
                                <br>

                                <h6>الخيارات المتاحة :</h6>
                                <div style="display: inline-block;" v-for="(option, key) in item.options">
                                    <span class="badge badge-info light me-1"> <span
                                            @click="item.options.splice(key, 1)">$%</span>
                                        {{ option.Aname }} </span>
                                </div>
                                <!-- add options -->
                                <button v-if="!editOptions" class="btn btn-success" @click="editOptions = true"
                                    style="padding: 5px 16px;margin: 20px;">Add</button>

                                <button v-if="editOptions" class="btn btn-success"
                                    @click="saveOptions(); editOptions = false"
                                    style="padding: 5px 16px;margin: 20px;">Save</button>

                                <div v-show="editOptions" id="AddOptions"
                                    style="padding: 16px;display: flex;flex-direction: column;">
                                    <input type="text" v-model="optionsAname" name="" id="Aname"
                                        placeholder="Type Arabic Name">
                                    <input type="text" v-model="optionsEname" name="" id="Ename"
                                        placeholder="Type English Name">
                                    <input type="number" v-model="optionsPrice" id="Price" placeholder="Type Price">
                                </div>
                                <p v-if="!item.options">لا يوجد اضافات</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
  
<script>
import { useRoute } from 'vue-router/composables';
import { mapState } from 'vuex';

export default {
    name: 'ItemView',
    components: {
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
                        id: "5",
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
                        id: "3",
                        check: false
                    })
                })
                this.addonsAname = '';
                this.addonsEname = '';
                this.addonsPrice = '';
            }
        },
        deleteoption: function (option) {

        }

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
  