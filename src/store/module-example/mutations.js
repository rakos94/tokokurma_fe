import moment from 'moment'
import FormatCurrency from 'src/helper/currency' 
moment.locale("id")

export function someMutation (/* state */) {
}

export const updateDrawerState = (state, opened) => {
    state.menuDrawer = opened
}

export const toggleMenuDrawer = (state) => {
    state.menuDrawer = !state.menuDrawer
}

export const updateOrderList = (state, data) => {
    data.forEach(e => {
        e.updated_at = moment(e.updated_at).calendar()
        e.total_price = FormatCurrency(e.total_price)
    })
    
    state.order = data
}

export const updateOrderPage = (state, page) => {
    state.orderPage = page
}

export const resetItem = (state) => {
    state.item = {
        name: null,
        price: null,
        stock: null
    }
}

export const setNotif = (state, data) => {
    state.notif.message = data.message
    state.notif.color = 'red'
    if (data.sukses) {
        state.notif.color = 'green'
    }
}