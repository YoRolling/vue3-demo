<template>
    <div class="home" id="home">
        <h1>All My Blogs</h1>
        <ul class="list">
            <li
                v-for="(blog, $i) in blogs"
                :key="blog.id"
                @click="showDetail(blog)"
            >
                {{ $i + 1 }} - {{ blog.title }}
            </li>
        </ul>
    </div>
</template>
<script>
import { onMounted, reactive, toRefs, toRef, ref, useCssVars } from "vue";
import $http from "/@src/http/";
import { useRouter } from "vue-router";
export default {
    name: "Home",
    setup(props, { emit, attrs, slots }) {
        useCssVars(() => ({ bgColor: "red" }));
        // reactive
        let blogs = reactive([]);

        // ref
        // let blogs = ref([])
        onMounted(() => {
            $http
                .get("/posts")
                .then((res) => {
                    return res.data;
                })
                .then((res) => {
                    // reactive
                    //   res.forEach((v) => {
                    //     blogs.push(v)
                    //   })
                    blogs = Object.assign(blogs, res);

                    // ref
                    // blogs.value = res
                })
                .catch((error) => {
                    console.error(error);
                });
        });
        const $router = useRouter();

        function showDetail(blog) {
            $router.push({
                name: "DetailView",
                params: {
                    id: blog.id,
                },
            });
        }

        return {
            blogs: blogs,
            showDetail,
        };
    },
};
</script>
<style lang="scss" scoped>
.list {
    list-style: outside none;
    line-height: 2;
    text-align: left;
    li:hover {
        color: var(--bgColor);
    }
}
</style>
