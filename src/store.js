import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const HTTP = Axios.create({
  baseURL: 'http://blog-deleon.herokuapp.com/api',
});

export default new Vuex.Store({
  state: {
  	token: localStorage.getItem('token') || null,
  	user: (localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null) || null,
  	articles: null
  },
  mutations: {
  	auth_success(state, payload) {
	    state.user =  payload.user;
	    state.token = payload.token;
	},
	store_articles(state, articles) {
		state.articles = articles;
	},
	logout(state){
	    state.token = null;
	    state.user = null;
	    localStorage.setItem('token', null);
	    localStorage.setItem('user', null);
	    alert("Logged out!")
	 }
  },
  actions: {
  	login(context, payload) {
  		return HTTP.post('/user/authenticate', {'data': payload})
  	},
  	logout({ commit }) {
  		commit('logout');
  	},
  	auth_success({commit}, payload) {
  		commit('auth_success', payload)
  	},
  	create_article(context, payload) {
  		payload.author_name = context.state.user.username;
  		payload.author_id = context.state.user.user_id;
  		return HTTP.post('/article', {data: payload});
  	},
  	create_user(context, payload) {
  		return HTTP.post('/user', {data: payload})
  	},
  	getAllArticles(context) {
  		return HTTP.get('/articles');
  	},
  	getAllArticlesByUser(context) {
  		return HTTP.get('/article/author/' + context.state.user.user_id);
  	},
  	edit_article(context, payload) {
  		return HTTP.put('/article/'+payload.id, {data: payload.article})
  	},
  	storeArticles({ commit }, articles) {
  		commit('store_articles', articles)
  	}

  },
  getters: {
	  isLoggedIn: state => {
	  	if(state.token == "null" || state.token == null) return false;
	  	if(state.token != "null" || state.token != null) return true;
	  },
  }
})
