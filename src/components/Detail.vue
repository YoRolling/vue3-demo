<template>
    <section>
        <article>
            <h1>{{ blog.title }}</h1>
            <div v-html="blog.body" class="body"></div>
            <p>post by {{ blog.userId }}</p>
        </article>
        <aside>
            <button @click="edit">编辑</button>
            <button @click="del">删除</button>
            <button @click="randBlog">Random blog</button>
        </aside>
    </section>
    <modal v-model:visible="showModal" @ok="ok" @close="close">
        <template #body> 删除成功 </template>
    </modal>
</template>
<script>
import { computed, onMounted, reactive, ref, toRaw } from "vue";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
import axios from "axios";
import Modal from "/@src/components/Modal.vue";
import { useStore } from "vuex";
import { DISPATH_BLOG } from "../store/const";
export default {
    components: {
        Modal,
    },
    setup(props, ctx) {
        const route = useRoute();
        const router = useRouter();
        const store = useStore();
        const id = computed(() => route.params.id);
        let blog = reactive({});
        let showModal = ref(false);
        function loadBlog(id) {
            axios
                .get("https://jsonplaceholder.typicode.com/posts/" + id)
                .then((res) => res.data)
                .then((res) => (blog = Object.assign(blog, res)))
                .catch((error) => {
                    console.dir(error);
                });
        }
        onMounted(() => {
            const id = route.params.id;
            loadBlog(id);
        });
        function del() {
            axios
                .delete("https://jsonplaceholder.typicode.com/posts/" + id)
                .then((res) => res.data)
                .then(() => {
                    showModal.value = true;
                })
                .catch(console.error);
        }
        function edit() {
            store.dispatch(DISPATH_BLOG, blog).then((res) => {
                console.log(res);
                router.push({
                    name: "EditorView",
                    params: {
                        id: id,
                    },
                });
            });
        }
        function ok() {
            console.log("Ok callback fired");
        }
        function close() {
            console.log("Close callback fired");
        }
        function randBlog() {
            const id = parseInt(Math.random() * (100 - 1 + 1) + 1, 10);

            router.push({
                name: "DetailView",
                params: {
                    id,
                },
            });
        }

        onBeforeRouteUpdate((to, from, next) => {
            const id = to.params.id;
            loadBlog(id);
            next();
        });
        return {
            blog,
            del,
            edit,
            showModal,
            ok,
            close,
            randBlog,
        };
    },
};
</script>
<style lang="scss" scoped>
section {
    display: flex;
    article {
        flex-grow: 2;
    }
    aside {
        flex-grow: 1;
    }
    .body {
        white-space: break-spaces;
    }
    button {
        background: #ffffff;
        border-radius: 4px;
        border: 1px solid #ccc;
        padding: 8px 20px;
        cursor: pointer;
        &:hover {
            border-color: #72bcf5;
            color: #72bcf5;
        }
        & + button {
            margin-left: 20px;
        }
    }
}
</style>
