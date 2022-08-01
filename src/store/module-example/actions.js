import { api } from 'boot/axios'

export function someAction (/* context */) {
}

export function fetchOrder (context, payload) {
    let page = ''
    if (payload.page != undefined) page = '&page='+payload.page
    api.get('/order?page_size=5'+ page)
        .then((response) => {
            if (response.status == 200) {
                context.commit('updateOrderList', response.data)
                context.commit('updateOrderPage', payload.page)
            }
        })
        .catch(() => {
        })
}

export function ItemAdd (context, payload) {
    api.post('/item/add', payload)
        .then((response) => {
            if (response.status == 200) {
                context.commit('resetItem')
                context.commit('setNotif', { message:"Sukses", sukses:true })
                this.$router.back()
            } else {
                context.commit('setNotif', { message:response.data, sukses:false })
            }
        })
        .catch((err) => {
            context.commit('setNotif', { message:err, sukses:false })
        })
}