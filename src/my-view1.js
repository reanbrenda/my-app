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

import { LitElement, html, property, customElement,css} from 'lit-element'; /**import  litElement  */
import './shared-styles.js';

class MyView1 extends LitElement {

  static get styles() {
    // Write styles in standard CSS
    return css`
      .MyContainer {
         margin:auto;
         margin-Top:40px;
         width:500px;
         height:250px;
        }
   
    `;
  }
  static get properties() {
    return {
      fname: { type: String },
      email: { type: String },
      phone: { type: String }
    };
  }
  constructor() {
    super();
    this.fname= ''
    this.email=''
    this.phone ='';
  }
 
  /** 
   {
    return html`<p>Hello, ${this.name}!</p>`;
  */
  render() {
    return html` 
    <!-- import  bulma  -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"> 
    <div class="MyContainer"> 

    <p> ${this.fname}</p>
    <form  @submit="${this.handleSubmit}">
    <div class="field">
    <label class="label">Name</label>
    <div class="control">
      <input class="input" value=${this.fname} type="text" placeholder="Text input">
    </div>
  </div> 
  <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-danger" value=email type="email" placeholder="Email input" value="hello@">
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle"></i>
      </span>
    </div>
  </div>

  <div class="field">
  <label class="label">Phone Number</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" value="phone" type="text" placeholder="phone number" value="+2547..">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>
  

  <div class="field is-grouped">
    <div class="control">
      <button  @click="${this.Submit}" class="button is-link">Submit</button>
      
    </div>
    <div class="control">
      <button class="button is-link is-light">Cancel</button>
    </div>
  </div>
  </div>
  </form>
    `;
  }
  handleSubmit(e) {
		console.log("submitted", e.target.va);
		e.preventDefault();

	}

  Submit(e) {
      this.name = e.target.value
      //console.log("submitted", e.target);
      //console.log(this.name)
 }
}

customElements.define('my-view1', MyView1);
//window.customElements.define('my-view1', MyView1);
