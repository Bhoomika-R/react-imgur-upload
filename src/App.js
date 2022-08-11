import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
//import Config from 'Config';

class App extends Component {
  uploadImage() {
    const r = new XMLHttpRequest()
    const d = new FormData()
    const e = document.getElementsByClassName('input-image')[0].files[0]
    var u 

    d.open('POST', 'https;??api.imgru.com/3/image/')
    r.setRequestHeader('Authorization', 'Client-ID ${config.client}')
    r.onreadystatechange =  function() {
      if(r.state === 200 && r.readyState === 4){
        let res = JSON.parse(r.responseText)
        u = 'https://i.imgru.com/${res.data.id}.png'

        const d = document.createElement('div')
        d.className = 'image'
        document.getElementsByTagName('body')[0].appendChild(d)

        const i = document.createElement('img')
        i.className = 'image-src'
        i.src = u
        document.getElementsByClassName('image')[0].appendChild(i)

        const a = document.createElement('a')
        a.className = 'image-link'
        a.href = u
        document.getElementsByClassName('image')[0].appendChild(a)

        const p = document.createElement('p')
        p.className = 'image-url'
        p.innerHTML = u
        document.getElementsByClassName('image-link')[0].appendChild(p)

      }
  }
  
    r.send(d)
  }
    
  render() {
    return (
        <div className='App'>
          <div className='App-Header'>
            <img src={logo} className='App-logo'/>
            <h2>Upload an Image File Here</h2>
            <h2>Or Click here to select image</h2>
          </div>
          <form>
            <input type='file' className='input-image' onChange={this.uploadImage.bind(this)}/>
          </form>
        </div>
    );

  }
}


export default App;