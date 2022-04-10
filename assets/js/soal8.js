import { toIDR } from './functions.js'

const getInfoPenjualan = (dataPenjualan) => {
  console.log('dataPenjualan', dataPenjualan)

  // menghitung total keuntungan
  const totalUntung = dataPenjualan.reduce((total, product) => {
    const untung =
      product.totalTerjual * (product.hargaJual - product.hargaBeli) -
      product.hargaBeli * product.sisaStok

    return total + untung
  }, 0)

  // menghitung total modal
  const totalModal = dataPenjualan.reduce((total, product) => {
    const modal = (product.totalTerjual + product.sisaStok) * product.hargaBeli

    return total + modal
  }, 0)

  //   menghitung persentase keuntungan
  const persenUntung = (totalUntung / totalModal) * 100

  // menentukan produk buku terlaris
  const productTerlaris = dataPenjualan.reduce((terlaris, currentProduct) => {
    return currentProduct.totalTerjual > terlaris.totalTerjual
      ? currentProduct
      : terlaris
  })

  //   menentukan penulis terlaris
  const penulis = []
  dataPenjualan.forEach((product) => {
    let isAvailable = false

    penulis.forEach((p) => {
      if (product.penulis === p.nama) {
        isAvailable = true
        p.terjual += product.totalTerjual
      }
    })

    if (!isAvailable) {
      penulis.push({
        nama: product.penulis,
        terjual: product.totalTerjual,
      })
    }
  })

  console.log('dataPenulis', penulis)

  const penulisTerlaris = penulis.reduce((terlaris, currentPenulis) => {
    return currentPenulis.terjual > terlaris.terjual ? currentPenulis : terlaris
  })

  //   assign value pada masing-masing properti
  const infoPenjualan = {
    totalKeuntungan: toIDR(totalUntung),
    totalModal: toIDR(totalModal),
    persentaseKeuntungan: `${Math.ceil(persenUntung)}%`,
    produkBukuTerlaris: productTerlaris.namaProduk,
    penulisTerlaris: penulisTerlaris.nama,
  }

  return infoPenjualan
}

export default getInfoPenjualan
