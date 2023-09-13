<template>
    <div class="" style="width: 100vw; background-color: #eee;">
        <div class="container">
            <div class="card" style="height: 300px;margin: 30px auto;padding: 20px;">

                <div v-if="previewImage == null"
                    style="font-size: 20px;font-weight: bold; color: #dd2f6e;display: flex;flex-direction: column-reverse;justify-content: center;align-items: center;height: 300px;background-color: rgb(221 47 112 / 24%);border: 5px dashed rgb(221, 47, 110);">
                    <label for="photo-upload"
                        style="cursor: pointer;display: flex;flex-direction: column;align-items: center;">
                        <i class="bi bi-file-earmark-plus" style="font-size: 100px;"></i>
                        + Choose Product Photo
                    </label>
                    <input class="form-control" id="photo-upload" type="file" style="display: none;" @change="uploadImage">
                </div>
                <div v-else style="position: relative;height: 260px;width: 100%;">
                    <i @click="previewImage = null" style="position: absolute; font-size: 25px;padding: 5px;"
                        class="bi bi-x-circle-fill"></i>
                    <img :src="previewImage" class="uploading-image" style="height: 100%;width: 100%;" />
                </div>
            </div>
            <form action="">
                <div class="card p-3">
                    <div class="input-field">
                        <h4>Name :</h4>
                        <input class="form-control" type="text" v-model="itemName" required>
                    </div>
                    <div class="input-field">
                        <h4>Title :</h4>
                        <input class="form-control" type="text" v-model="itemTitle" required>
                    </div>
                    <div class="input-field">
                        <h4>Tags :</h4>
                        <input class="form-control" type="text" v-model="itemTags" required>
                    </div>
                    <div class="input-field">
                        <h4>Link :</h4>
                        <input class="form-control" type="text" v-model="itemLink" required>
                    </div>
                    <div class="input-field">
                        <h4>Price :</h4>
                        <input class="form-control" type="text" v-model="itemPrice" required>
                    </div>
                    <div class="input-field">
                        <h4>Color :</h4>
                        <input class="form-control" type="text" v-model="itemColor" required>
                    </div>
                </div>
                <div class="card p-3">
                    <h2>Addons:</h2>
                    <div style="position: relative;" v-for="(addon, index) in addons" :key="index">
                        <div style="margin: 15px 0;">
                            <label for="">Arabic Name</label>
                            <input class="form-control" type="text" v-model="addon.Aname" required>
                        </div>
                        <div style="margin: 15px 0;">
                            <label for="">English Name</label>
                            <input class="form-control" type="text" v-model="addon.Ename" required>
                        </div>
                        <div style="margin: 15px 0;">
                            <label for="">Price</label>
                            <input class="form-control" type="text" v-model="addon.price" required>
                        </div>
                        <i class="bi bi-x-square-fill" style="font-size: 25px;color: #dd2f6e;"
                            v-on:click="removeAddons(index)" v-if="addons.length > 1"></i>
                        <i class="bi bi-plus-square-fill" style="font-size: 30px;color: #dd2f6e;margin: 20px;"
                            v-on:click="addAddons(index)" v-if="index === addons.length - 1"></i>
                    </div>
                </div>
                <div class="card p-3">
                    <h2>Options:</h2>
                    <div style="position: relative;" v-for="(option, index) in options" :key="index">
                        <div style="margin: 15px 0;">
                            <label for="">Arabic Name</label>
                            <input class="form-control" type="text" v-model="option.Aname" required>
                        </div>
                        <div style="margin: 15px 0;">
                            <label for="">English Name</label>
                            <input class="form-control" type="text" v-model="option.Ename" required>
                        </div>
                        <div style="margin: 15px 0;">
                            <label for="">Price</label>
                            <input class="form-control" type="text" v-model="option.price" required>
                        </div>
                        <i class="bi bi-x-square-fill" style="font-size: 25px;color: #dd2f6e;"
                            v-on:click="removeOption(index)" v-if="options.length > 1"></i>
                        <i class="bi bi-plus-square-fill" style="font-size: 30px;color: #dd2f6e;margin: 20px;"
                            v-on:click="addOption(index)" v-if="index === options.length - 1"></i>
                    </div>
                </div>
                <div>
                    <input type="submit" @click="save" value="Save Product" class="btn btn-success">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Home',
    components: {
    },
    data() {
        return {
            itemName: "",
            itemTitle: "",
            itemImg: "",
            itemTags: "",
            itemLink: "",
            itemPrice: "",
            itemColor: "",
            previewImage: null,
            options: [{
                "id": 0,
                "Aname": "",
                "Ename": "",
                "price": "",
                "check": false
            }],
            addons: [{
                "id": 0,
                "Aname": "",
                "Ename": "",
                "price": "",
                "check": false
            },
            ],
        }
    },
    methods:
    {
        uploadImage(e) {
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                this.previewImage = e.target.result;
                console.log(this.previewImage);
                this.itemImg = e.target.result;
            };
        },
        addOption(index) {
            this.options.splice(index + 1, 0, {
                "id": index + 1,
                "Aname": "",
                "Ename": "",
                "price": "",
                "check": false
            });
        },
        removeOption(index) {
            this.options.splice(index, 1);
        },

        addAddons(index) {
            this.addons.splice(index + 1, 0, {
                "id": index + 1,
                "Aname": "",
                "Ename": "",
                "price": "",
                "check": false
            });
        },
        removeAddons(index) {
            this.addons.splice(index, 1);
        },
        save() {
            if ($('input[required]').filter(function () { return this.value == ''; }).length > 0) {
                alert('Please fill out all required fields.');
                return;
            }
            this.items.push({
                id: this.items[this.items.length - 1].id + 1,
                name: this.itemName,
                title: this.itemTitle,
                img: this.itemImg,
                tags: this.itemTags,
                link: this.itemLink,
                price: this.itemPrice,
                color: this.itemColor,
                addons: this.addons,
                options: this.options,
            })
            this.previewImage = null,
                this.itemName = "";
            this.itemTitle = "";
            this.itemImg = "";
            this.itemTags = "";
            this.itemLink = "";
            this.itemPrice = "";
            this.itemColor = "";
            this.addons = [{
                "id": 0,
                "Aname": "",
                "Ename": "",
                "price": "",
                "check": false
            },
            ],
                this.options = [{
                    "id": 0,
                    "Aname": "",
                    "Ename": "",
                    "price": "",
                    "check": false
                }]
        }
    },
    watch:
    {

    },
    computed:
    {
        ...mapState({
            items: state => state.items
        })
    }
}
</script>
<style>
.input-field {
    padding: 20px;
}
</style>