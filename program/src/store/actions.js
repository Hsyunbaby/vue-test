import Vue from 'vue';

export default {
    SHOW_LOADING: ({ commit, state }) => {
        commit('SHOW_LOADING')
    },
    HIDE_LOADING: ({ commit, state }) => {
        commit('HIDE_LOADING')
    },
};