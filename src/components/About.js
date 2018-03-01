import React, { Component } from 'react';
import '../css/about.css';
import Skills from '../components/Skills';


let paragraphOne = <div>My name is Alex Cassell (surprise!)  I am a combat veteran and I have been making 
websites since 1997.  Coding is by far my favorite activity; besides playing with my kids! 
I mostly enjoy building websites and games with <span className="about__highlighted">HTML5</span> (ie <span className="about__highlighted">React</span>, <span className="about__highlighted">JavaScript</span>, <span className="about__highlighted">Node</span>, <span className="about__highlighted">CSS3</span> and <span className="about__highlighted">HTML</span>).  I have
over 10 years of experience with popular CMS software such as <span className="about__highlighted">WordPress</span> and <span className="about__highlighted">Drupal</span>.</div>

let paragraphTwo = <div>My passion is <span className="about__highlighted">FrontEnd</span> development but I have worked with <span className="about__highlighted">MYSQL</span>, <span className="about__highlighted">MongoDB</span>, <span className="about__highlighted">FireBase</span> and <span className="about__highlighted">GameSparks</span>.
I have more than 2 years experience making apps and games with <span className="about__highlighted">Unity3d</span>.</div>

let paragraphThree = <div>I am currently attending Lambda School for Software Engineering 
and will be finished at the end of April.</div>

let w = window.innerWidth/2;
let h = window.innerHeight/2;

let position; //keeps track of mouse's currect section top left 1 bottom left 2 top right 1 bottom right 4

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'head': ''};
    this.state = { x: 0, y: 0 };
  }

  componentWillMount(){
    this.defaultPortrait();
    console.clear();
    console.log("%c Thank you for your interest in this portfolio, if you would like to see the code you can visit: https://github.com/AlexCassell/new-portfolio", 'background: black; color: white');
  }

  _onMouseMove(e) {
    if(window.innerWidth > 999){
      if(window.innerWidth === 1360 || window.innerWidth === 1366){
        if (e.clientX < w - 100 && e.clientY < h && position !== 1){
          // top left
          position = 1;
          setTimeout( () => this.defaultPortrait(this) , 3000); //reset after time
          this.setState({head: <div className='about__portrait__topLeft' />}); 
        }
        else if(e.clientX < w - 100 && e.clientY > h && position !== 2){
          // bottom left
          position = 2;
          setTimeout( () => this.defaultPortrait(this) , 3000); //reset after time
          this.setState({head: <div className='about__portrait__bottomLeft' />});
        }
        else if(e.clientX > w - 100 && e.clientY < h && position !== 3){
          // top right
          position = 3;
          setTimeout( () => this.defaultPortrait(this) , 3000); //reset after time
          this.setState({head: <div className='about__portrait__topRight' />});
        }
        else if(e.clientX > w - 100 && e.clientY > h && position !== 4){
          // bottom right
          position = 4;
          setTimeout( () => this.defaultPortrait(this) , 3000); //reset after time
          this.setState({head: <div className='about__portrait__bottomRight' />});
        }
      }
      else if(e.clientX < w && e.clientY < h && position !== 1){
        // top left
        position = 1;
        setTimeout( () => this.defaultPortrait(this) , 3000); //reset after time
        this.setState({head: <div className='about__portrait__topLeft' />}); 
      }
      else if(e.clientX < w && e.clientY > h && position !== 2){
        // bottom left
        position = 2;
        setTimeout( () => this.defaultPortrait(this) , 3000); //reset after time
        this.setState({head: <div className='about__portrait__bottomLeft' />});
      }
      else if(e.clientX > w && e.clientY < h && position !== 3){
        // top right
        position = 3;
        setTimeout( () => this.defaultPortrait(this) , 3000); //reset after time
        this.setState({head: <div className='about__portrait__topRight' />});
      }
      else if(e.clientX > w && e.clientY > h && position !== 4){
        // bottom right
        position = 4;
        setTimeout( () => this.defaultPortrait(this) , 3000); //reset after time
        this.setState({head: <div className='about__portrait__bottomRight' />});
      }
    }
  }

  defaultPortrait(){
    this.setState({head: <div className='about__portrait' />});
    position = 0;
  }

  render() {
    return (
      <div className="about" onMouseMove={this._onMouseMove.bind(this)}>
        <div className="preload-00"/>
        <div className="preload-01"/>
        <div className="preload-02"/>
        <div className="preload-03"/>
        <div className="preload-04"/>
          <div className="about__contentWrapper">
            {this.state.head}
            <div className="about__mainContent">
              <div className="about__paragraph">
                {paragraphOne}
              </div>
              <div className="about__paragraph">
                {paragraphTwo}
              </div>
              <div className="about__paragraph">
                {paragraphThree}
              </div>
            </div>
            < Skills/>
          </div>
        </div>
        )
      }
  }

// render(<About />, document.getElementById('root'));

export default About;