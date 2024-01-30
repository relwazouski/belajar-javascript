var menu = prompt('Pilih Menu Makanan \n 1.Nasi Goreng = Rp10.000 \n 2.Mie Ayam = 8.000 \n 3.Bubur Ayam 10.000')
var jumlah = prompt('Masukan Jumlah Yang akan Di beli')
if (menu == "Nasi Goreng") {
    alert('Makanan Yang dipilih = Nasi Goreng\nJumlah = ' + jumlah + '\nTotal Biaya = ' + jumlah*10000 )
    alert('TERIMAKASIH!!!!!!!!!!!!')
} else if (menu == "Mie Ayam") {
    alert('Makanan Yang dipilih = Mie Ayam\nJumlah = ' + jumlah + '\nTotal Biaya = ' + jumlah*8000 )
    alert('TERIMAKASIH!!!!!!!!!!!!')
} else if (menu == "Bubur Ayam") {
    alert('Makanan Yang dipilih = Bubur Ayam\nJumlah = ' + jumlah + '\nTotal Biaya = ' + jumlah*10000)
    alert('Thankyouu👌')
} else {
    alert('Tidak ada menu yang dipilih')
}