export default function FormatCurrency(nominal){
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: '0' }).format(nominal)
}