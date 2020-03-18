// class ContentProvider {
//   constructor(canvas, contKey) {
//     this.play(canvas, contKey)
//   }

//   getPath() {
//     console.log('===== This is getPath')
//   }
//   destroy() {
//     console.log('===== This is destroy')
//   }
//   scriptLoad(src = "", async = true) {
//     console.log('===== This is scriptLoad')
//     return new Promise(resolve, reject) {
//       const script = document.createElement("script")
//       script.async = async
//       script.src = src
//       document.body.appendChild(script)
//     }
//   }
//   loadDependencies() {
//     console.log('===== This is loadDependencies')
//   }
//   load() {
//     console.log('===== This is load')
//   }
//   play(canvas, contKey) {
//     console.log('===== This is play')
//     console.log(canvas, contKey)
//   }
// }

// export { ContentProvider }

export const ContentProvider = {
  scriptLoad(src = '', async = true) {
    return new Promise((resolve, reject) => {
      if (!src) reject(new Error('js의 src가 없습니다.'))

      const exist = document.querySelector(`script[src='${src}']`)
      if (exist) {
        resolve(exist)
        return
      }

      const script = document.createElement('script')
      script.onload = () => {
        resolve(script)
      }
      script.onerror = () => {
        reject(new Error('script load error'))
        document.body.removeChild(script)
      }
      script.async = async
      script.src = src

      document.body.appendChild(script)
    })
  }
  // scriptLoad(src = "", async = true) {
  //   console.log('===== This is scriptLoad')
  //   return new Promise(resolve, reject) {
  //     const script = document.createElement("script")
  //     script.async = async
  //     script.src = src
  //     document.body.appendChild(script)
  //   }
  // }
}
