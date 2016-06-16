import React from 'react'

export default class App extends React.Component {
  imageNames = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg']
  state = {
    imgList: []
  }
  imgURl = []

  componentWillMount() {
    this.loaded()
  }
  loaded() {
    const promiseArr = this.imageNames.map((name) => {
      const url = require(`../images/${name}`)
      this.imgURl.push(url)
      return this.getPromise(url)
    })
    Promise.all(promiseArr).then((datas) => {
      console.log('加载完成')
      const list = this.imgURl.map((data, key) => {
        return <img src={data} key={key} />
      })
      this.setState({
        imgList: list
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  getPromise(path) {
    return new Promise((resolve, reject) => {
      const image = new Image()
      image.onload = resolve
      image.onerror = reject
      image.src = path
    })
  }
  render() {
    const { imgList } = this.state
    if (imgList.length === 0) {
      return null
    }
    console.log('渲染')
    return (
      <div>
        {imgList}
      </div>
    )
  }
}
