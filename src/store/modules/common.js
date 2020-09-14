import { DISPATH_BLOG } from "../const";
const state = {
    blog: { title: "not found blog" },
};

const mutations = {
    [DISPATH_BLOG](state, payload) {
        state.blog = payload;
    },
};

const actions = {
    [DISPATH_BLOG]({ commit }, payload) {
        commit(DISPATH_BLOG, payload);
    },
};

const getters = {
    currentBlog(state) {
        return state.blog;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
