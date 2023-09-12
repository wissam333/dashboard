<template>
    <div class="container-fluid" style="width: 100vw;">
        <h2 class="my-8">التعديل على التصنيفات</h2>
        <!-- row -->
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12">
                    <div class="table-responsive">
                        <table id="example5" class="display mb-4 dataTablesCard" style="width: 100%;">
                            <thead>
                                <tr>
                                    <th><strong class="font-w600">Category ID</strong></th>
                                    <th><strong class="font-w600">Arabic Name</strong></th>
                                    <th><strong class="font-w600 wspace-no">English Name</strong></th>
                                    <th><strong class="font-w600">Link</strong></th>
                                    <th><strong class="font-w600">Delete</strong></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(cat, key) in cats" class="rows">
                                    <td>{{ cat.id }}</td>
                                    <td><input type="text" v-model="cat.Aname"></td>
                                    <td><input type="text" v-model="cat.Ename"> </td>
                                    <td><input type="text" v-model="cat.link"></td>
                                    <td @click="cats.splice(key, 1)"
                                        style="text-align: center; font-size: 18px;color: #dd2f6e;"><i
                                            class="bi bi-x-square-fill"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <button v-if="!add" class="btn btn-success" @click="add = true" style="padding: 5px 16px;margin: 20px;">Add</button>

        <button v-if="add" class="btn btn-success" @click="save(); add = false"
            style="padding: 5px 16px;margin: 20px;">Save</button>

        <div v-show="add" id="AddOptions" style="padding: 16px;display: flex;flex-direction: column;">
            <input type="text" v-model="Aname" name="" id="Aname" placeholder="Type Arabic Name">
            <input type="text" v-model="Ename" name="" id="Ename" placeholder="Type English Name">
            <input type="text" v-model="link" id="link" placeholder="Type Link">
        </div>
    </div>
</template>
  
<script>
import { mapState } from 'vuex';


export default {
    name: 'CategoryView',
    components: {
    },
    data() {
        return {
            add: false,
            Aname: '',
            Ename: '',
            link: ''
        }
    },
    methods:
    {
        save: function () {
            if (this.Aname.length != '' && this.Ename != '' && this.link != '') {
                this.cats.push({
                    Aname: this.Aname,
                    Ename: this.Ename,
                    link: this.link,
                    id: "5",
                })
                this.Aname = '';
                this.Ename = '';
                this.link = '';
            }

        },

    },
    watch:
    {

    },
    computed:
    {
        ...mapState({
            cats: state => state.cats,
        }),
    }
}
</script>
<style lang="scss" scoped>
thead,
tbody,
tfoot,
tr,
td,
th {
    padding: 8px 15px;
    white-space: nowrap;
}

.rows:nth-child(even) {
    background-color: #dd2f6e;
    td{
        color: #fff;
    }
    input{
        color: #fff;
    }

    i{
        color: #fff;
    }
}
</style>