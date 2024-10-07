const namaMahasiswa = ['Ali','Afdal', 'Budianto', 'Citra', 'Dasep', 'Fira', 'Asep'];

console.log('Nama mahasiswa yang diawali dengan huruf A: ')
namaMahasiswa.forEach(nama => {
    if(nama.startsWith('A'))
        console.log(nama)
})

const namaPanjang = namaMahasiswa.reduce((a,b) => a.length > b.length ? a : b)
console.log('\nNama mahasiswa yang paling panjang: '+ namaPanjang)

const namaPendek = namaMahasiswa.reduce((a,b) => a.length < b.length ? a : b)
console.log('\nNama mahasiswa yang paling pendek: '+ namaPendek)