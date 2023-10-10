import { ref, reactive } from 'vue'

import router from '../router/router';

const authStore = reactive({
    isAuthenticated: localStorage.getItem('auth') == 1,
    user: JSON.parse(localStorage.getItem('user')),
    authenticate(username, password) {

        fetch('https://dummyjson.com/user/1',
            // {
            //     method: 'GET',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({ username, password })
            // }
        ).then(res => res.json())
            .then(res => {
                if (res) {
                    authStore.isAuthenticated = true;
                    authStore.user = res;
                    localStorage.setItem('auth', 1)
                    localStorage.setItem('user', JSON.stringify(res))
                    router.push('/protected')
                }
            })

        authStore.isAuthenticated = true
    },
    logout() {
        localStorage.setItem('auth', 0)
        localStorage.setItem('user', null)
        authStore.isAuthenticated = false
        authStore.user.value = {}
        router.push('/login')
    }
})

export { authStore }