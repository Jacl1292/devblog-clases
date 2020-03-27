import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {

  constructor() {
    super();
    this.state = {
        post :[]
    }
  }


   getPosts = (url) => {
    fetch(url, {
      method: 'GET', // GET, POST, PUT, DELETE
      //body: JSON.stringify(data), // POST y PUT
      headers: {
        'Content-Type': 'application/json', // Tipo de Respuesta
      }
    }).then((response) => {
      // Respuesta del Servidor
      //console.log("Status: " + response.status);
      return response.json(); // Siempre hay que devolver el json
    }).then(data => {
      // Informacion de la Peticion
      //console.log(data);
      this.setState({post:data});

    }).catch(error => {
      // Errores de la Peticion
      console.log(error)
    })
  }


  componentDidMount(){
    console.log("Despues de renderizar el Componente")
    this.getPosts('https://jsonplaceholder.typicode.com/posts');
  }

  componentWillUnmount(){
    console.log("Antes de desrenderizar o eliminar el Componente")
  }


  
  render() {
    return (
      <>
        <div className="preloader">
          <div className="rounder"></div>
        </div>

        <div id="main">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="about-fixed">
                  <div className="my-pic">
                    <img src="images/pic/my-pic.png" alt="" />
                    <a href="/#" className="collapsed" data-target="#menu" data-toggle="collapse"><i className="icon-menu menu"></i></a>
                    <div id="menu" className="collapse">
                      <ul className="menu-link">
                        <li><a href="about.html">About</a></li>
                        <li><a href="work.html">Work</a></li>
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="my-detail">
                    <div className="white-spacing">
                      <h1>Alex Parker</h1>
                      <span>Web Developer</span>
                    </div>
                    <ul className="social-icon">
                      <li><a href="/#" target="_blank" className="facebook"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="/#" target="_blank" className="twitter"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="/#" target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                      <li><a href="/#" target="_blank" className="github"><i className="fa fa-github"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="col-md-12 page-body">
                  <div className="row">
                    <div className="sub-title">
                      <h2>My Blog</h2>
                      <a href="contact.html"><i className="icon-envelope"></i></a>
                    </div>
                    <div className="col-md-12 content-page">
                      {
                        this.state.post.map((post, index) => {
                          return (
                            <div key={index} className="col-md-12 blog-post">
                              <div className="post-image">
                                <img src={"https://picsum.photos/id/" + Math.floor(Math.random() * 1000) + "/810/326"} alt="" />
                              </div>
                              <div className="post-title">
                                <a href="single.html"><h1>{this.state.post.title}</h1></a>
                              </div>
                              <div className="post-info">
                                <span>November 23, 2016 / by <a href="/#" target="_blank">Alex Parker</a></span>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ut ratione similique temporibus tempora dicta soluta? Qui hic, voluptatem nemo quo corporis dignissimos voluptatum debitis cumque fugiat mollitia quasi quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ut ratione similique.</p>
                              <a href="single.html" className="button button-style button-anim fa fa-long-arrow-right"><span>Read More</span></a>
                            </div>
                          )
                        })
                      }


                      <div className="col-md-12 text-center">
                        <a href="javascript:void(0)" id="load-more-post" className="load-more-button">Load</a>
                        <div id="post-end-message"></div>
                      </div>

                    </div>

                  </div>




                  <div className="col-md-8 col-md-offset-2">
                    <form id="mc-form" method="post" action="http://uipasta.us14.list-manage.com/subscribe/post?u=854825d502cdc101233c08a21&amp;id=86e84d44b7">

                      <div className="subscribe-form margin-top-20">
                        <input id="mc-email" type="email" placeholder="Email Address" className="text-input" />
                        <button className="submit-btn" type="submit">Submit</button>
                      </div>
                      <p>Subscribe to my weekly newsletter</p>
                      <label for="mc-email" className="mc-label"></label>
                    </form>

                  </div>


                </div>



                <div className="col-md-12 page-body margin-top-50 footer">
                  <footer>
                    <ul className="menu-link">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="work.html">Work</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>

                    <p>© Copyright 2016 DevBlog. All rights reserved</p>



                    <div className="uipasta-credit">Design By <a href="http://www.uipasta.com" target="_blank">UiPasta</a></div>



                  </footer>
                </div>



              </div>


            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
