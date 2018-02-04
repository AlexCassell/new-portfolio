import React from 'react';
import '../css/projects.css';
import '../css/about.css';


const Projects  = () => {
    return (
        <div className="projects">
            <div className="projects__title">
                Projects
            </div>
            <div className="projects__contentWrapper">
                <div className="project__item">
                    <div className="projects__imageWrapper">
                        <div className="projects__images wordlaunchImageOne" />
                        <div className="projects__images wordlaunchImageTwo" />
                    </div>
                    <div className="projects__info">
                        Word Launch is a <span className="about__highlighted">desktop browser game</span> that teaches the Dolch words and is intended for first graders.
                        The game was built using <span className="about__highlighted">JavaScript</span>, <span className="about__highlighted">React</span>, <span className="about__highlighted">CSS</span>, <span className="about__highlighted">HTML</span> and <span className="about__highlighted">Google's text to speech engine</span>.<br/>
                        <div className="project__linksWrapper">
                            View Project:
                            <span className="projects__links"><i className="fab fa-github"></i> <a href="https://github.com/AlexCassell/react-word-game-2d" target="_blank" rel="noopener noreferrer">Repository</a></span>
                            <span className="projects__links"><i className="fab fa-chrome"></i> <a href="http://www.wordlaunch.alexcassell.com/" target="_blank" rel="noopener noreferrer">Webpage</a></span>
                        </div>
                    </div>
                </div>
                <div className="project__item">
                <div className="projects__imageWrapper">
                        <div className="projects__images storyTimeImageOne" />
                        <div className="projects__images storyTimeImageTwo" />
                    </div>
                    <div className="projects__info">
                        Story Time is a <span className="about__highlighted">browser app</span> where a user fills in some words and the app attempts to make a unique story.
                        The app was built using <span className="about__highlighted">JavaScript</span>, <span className="about__highlighted">React</span>, <span className="about__highlighted">Router</span>, <span className="about__highlighted">CSS</span>, <span className="about__highlighted">HTML</span> and <span className="about__highlighted">FireBase</span>.<br/>
                        <div className="project__linksWrapper">
                            View Project:
                            <span className="projects__links"><i className="fab fa-github"></i> <a href="https://github.com/AlexCassell/StoryTime" target="_blank" rel="noopener noreferrer">Repository</a></span>
                            <span className="projects__links"><i className="fab fa-chrome"></i> <a href="http://www.storytime.alexcassell.com/" target="_blank" rel="noopener noreferrer">Webpage</a></span>
                        </div>
                    </div>
                </div>
                <div className="project__item">
                <div className="projects__imageWrapper">
                        <div className="projects__images zombieGameImageOne" />
                        <div className="projects__images zombieGameImageTwo" />
                    </div>
                    <div className="projects__info">
                        Zombie Game is a basic <span className="about__highlighted">first person shooter</span> built during a 24 hour Hackathon, which we won.
                        This game was built using<br /><span className="about__highlighted">Unity3d</span> and <span className="about__highlighted">C#</span>.                        
                        <div className="project__linksWrapper">
                            View Project:
                            <span className="projects__links"><i className="fab fa-github"></i> <a href="https://github.com/AlexCassell/Unity-Hackathon-Project" target="_blank" rel="noopener noreferrer">Repository</a></span>
                            <span className="projects__links"><i className="fab fa-chrome"></i> <a href="https://alexcassell.com/V4.zip" target="_blank" rel="noopener noreferrer">Download</a></span>
                        </div>
                    </div>
                </div>
                <div className="project__item">
                    <div className="projects__info">
                    <div className="projects__imageWrapper">
                        <div className="projects__images trueColorGraphicsImageOne" />
                        <div className="projects__images trueColorGraphicsImageTwo" />
                    </div>
                    <div className="projects__info">
                        TrueColorGraphics.org is a  <span className="about__highlighted">WordPress</span> I maintain.  I originally<br />built a modern theme for
                        this site but the customer did not think his customers could figure it out.                      
                        <div className="project__linksWrapper">
                            View Project:
                            <span className="projects__links"><i className="fab fa-chrome"></i> <a href="http://www.truecolorgraphics.org/" target="_blank" rel="noopener noreferrer">Website</a></span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Projects;