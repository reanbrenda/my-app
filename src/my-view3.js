/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

//import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import { LitElement, html, property, customElement,css} from 'lit-element';
import './shared-styles.js';

class MyView3 extends LitElement {

  static get styles() {
    return css`
    .main_card {
      color: #fff;
      width: 500px;
      height: 200px;
      margin: 50px auto;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      max-width: 770px;
      background: #00C9FF; 
      background: -webkit-linear-gradient(to right, #92FE9D, #00C9FF);
      background: -webkit-gradient(linear, left top, right top, from(#92FE9D), to(#00C9FF));
      background: -webkit-linear-gradient(left, #92FE9D, #00C9FF);
      background: -o-linear-gradient(left, #92FE9D, #00C9FF);
      background: linear-gradient(to right, #92FE9D, #00C9FF); 
      -webkit-box-shadow: 0 0 40px rgba(0,0,0,0.3); 
              box-shadow: 0 0 40px rgba(0,0,0,0.3);
    }
    
    .card_left {
      width: 90%;
    }
    
    .card_datails {
      width: 90%;
      padding: 30px;
      margin-top: -25px;
    }
    .card_datails  h1 {
      font-size: 30px;
    }
   
    
    
    
    
    
    `
  }
  static get properties() {
    return {
      data: { type: Array },
      dict:{type:Array}
      
    };
  }
  constructor() {
    super();
    this.data= []
    this.dict ={'34': 'thirty-four', '90': 'ninety',
    '91': 'ninety-one','21': 'twenty-one',
    '61': 'sixty-one', '9': 'nine',
    '2': 'two', '6': 'six', '3': 'three',
    '8': 'eight', '80': 'eighty', '81': 'eighty-one',
    'Ninety-Nine': '99', 'nine-hundred': '900'}  
  }
 

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    }
   render() {
     //  GET request using fetch() 
fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")   
// Converting received data to JSON 
.then(response => response.json()) 
.then(json => { 
  this.data=json
})
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
      ${ this.data.map(item => 
        
        
        
        
        html`
        
        <div class="main_card">
        <div class="card_left">
          <div class="card_datails">
            <h1>${item.title}</h1>
            <p class="disc"> ${item.completed}</p>
          
          </div>
        </div>
        
        
        
         `)}

   

    `;
  }
}

window.customElements.define('my-view3', MyView3);
