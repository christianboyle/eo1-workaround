const updateImage = () => {
  document.getElementById('artImage').src = `${
    jsonData[currentIndex].src
  }?v=${new Date().getTime()}`
  console.log(`Image updated to: ${jsonData[currentIndex].src}`)
  currentIndex = (currentIndex + 1) % jsonData.length
  setTimeout(updateImage, 3600000)
}
