//create home component
<script setup>
import { useRoute } from 'vue-router';
import { ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios'
const route = useRoute()
const id = route.params.id
const post = reactive({})
const comments = ref([])
onBeforeMount(() => {
    // fetch(`https://dummyjson.com/posts/${id}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         post.id = data.id
    //         post.title = data.title
    //         post.body = data.body
    //     })
    axios.get(`https://dummyjson.com/posts/${id}`)
        .then(res => {
            post.id = res.data.id
            post.title = res.data.title
            post.body = res.data.body
        })

    axios.get(`https://dummyjson.com/posts/${id}/comments`)
        .then(res => {
            comments.value = res.data.comments
        })
})
</script>
<template>
    <article class="mb-10">
        <h1 class="text-xl mb-2">
            {{ post.title }}
        </h1>
        <p>
            <img :src="`//source.unsplash.com/random/300x200?${post.id}`" alt="">
            {{ post.body }}
        </p>
    </article>
    <article>
        <h2 class="font-bold underline-gray-600 mb-2" v-if="comments.length>0">Comments</h2>
        <hr/>
        <ul class="mt-5">
            <li v-for="comment in comments" :key="comment.id">
                <p><strong>{{ comment.user.username }}</strong> said {{ comment.body }}</p>
            </li>
        </ul>
    </article>
</template>

<style></style>