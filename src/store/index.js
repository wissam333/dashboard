			import Vue from 'vue'
			import Vuex from 'vuex'
			import axios from 'axios';
			import loc_json from '../json/v1.json';
			var lazyLoadInstance = new LazyLoad({});

			Vue.use(Vuex)

			export default new Vuex.Store({
			state: {
			db: [],
			branch: [],
			cats: [],
			items: [],
			Order_Temp:[],
			Order_List:[],
			OrderItems:[],
			preview: '',
			preview_index: 0,
			pageview:0
			},
			getters: {
			},
			mutations: {
  
		    DelOrderItems: function (state,index) {
		 	state.OrderItems.splice(index, 1);
	 	    },
			lazy_update(){
			lazyLoadInstance.update();
			},
			SetPreview(state, val){
			state.preview = val;
			},
   			GetAppJson(state){
			state.cats=loc_json.cats;
			state.items=loc_json.items;
			state.Order_List=loc_json.Order_List;
			state.OrderItems=loc_json.OrderItems;
			state.branch=loc_json.branch;
			},
			GetApiJson(state){
			axios.get('../json/v1.json')
			.then((response) => {
			//state.db=response.data;
			state.cats=response.data.cats;
			state.items=response.data.items;
			state.Order_List=response.data.Order_List;
			state.OrderItems=response.data.OrderItems;
			state.branch=response.data.branch;
			// alert(state.cats);
			}, (error) => {
			alert(error);
			});
			}
			},
			actions: {
   
			},
			modules: {
			}
			})
