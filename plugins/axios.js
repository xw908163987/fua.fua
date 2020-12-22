export default function ({ app: { $axios } }) {
    $axios.defaults.timeout = 15 * 1000=
    // 请求拦截器
    $axios.onRequest(config => {
        return config
    })
    // 响应拦截器
    $axios.onResponse(response => {
        return response.data
    })
}