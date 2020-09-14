<template>
    <div>
        Editor
        <form>
            <section>
                <label for="">title</label>
                <input type="text" v-model="blog.title" />
            </section>
            <section>
                <label for="">body</label>
                <textarea
                    name="body"
                    v-model="blog.body"
                    id=""
                    cols="30"
                    rows="10"
                ></textarea>
            </section>
        </form>
    </div>
</template>
<script>
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";
export default {
    name: "EditorView",
    setup(props, { emit, slots, attrs }) {
        const store = useStore();
        const blog = store.getters.currentBlog;
        return {
            blog,
        };
    },
};
</script>
