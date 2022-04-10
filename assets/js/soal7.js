const hitungTotalPenjualan = (dataPenjualan) => {
  console.log('dataPenjualan', dataPenjualan)

  const totalPenjualan = dataPenjualan.reduce((total, product) => {
    return total + product.totalTerjual
  }, 0)

  return totalPenjualan
}

export default hitungTotalPenjualan
