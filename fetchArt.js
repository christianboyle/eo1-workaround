let currentIndex = 0
let jsonData = []

fetch('./art.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('HTTP error ' + response.status)
    }
    return response.json()
  })
  .then((data) => {
    jsonData = Object.values(data)
    console.log('Fetched data: ', jsonData)
    if (jsonData.length > 0) {
      console.log('Calling updateImage function')
      updateImage()
    }
  })
  .catch(function (error) {
    console.log('Failed to fetch art.json file. Error: ', error)
  })
