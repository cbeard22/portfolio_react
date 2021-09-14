import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, } from 'react-mdl'
class Projects extends Component {
    render() {
        return (
            <div className="projects-grid">
                
                    <Card shadow={5} style={{ minWidth: "450", margin: '30px' }}>
                        <CardTitle style={{ color: 'black', height: "175px", background: "url(https://github.com/cbeard22/snaccidental-recipe/blob/main/assets/images/screenshot.png?raw=true) center / cover" }}></CardTitle>
                        <h4 style={{ marginLeft: '10px' }}>Snaccidental Recipe</h4>
                        <CardText>This is a web application that allows the user to search for recipes based on their ingredient or cuisine input.</CardText>
                        <CardActions border>
                            <a href="https://github.com/cbeard22/snaccidental-recipe" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                            <a href="https://cbeard22.github.io/snaccidental-recipe/" target="_blank">
                                <Button colored>Live Demo</Button>
                            </a>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{ minWidth: "450", margin: '30px' }}>
                        <CardTitle style={{ color: 'black', height: "175px", background: "url(https://github.com/cbeard22/poggers/blob/main/images/loginScreenshot.png?raw=true) center / cover" }}></CardTitle>
                        <h4 style={{ marginLeft: '10px' }}>Poggers</h4>
                        <CardText>This web application allows a user to login. It then keeps track of their logged games and tasks to help them keep track of objectives.</CardText>
                        <CardActions border>
                            <a href="https://github.com/cbeard22/poggers" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                            <a href="https://poggers-pog.herokuapp.com/login/" target="_blank">
                                <Button colored>Live Demo</Button>
                            </a>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{ minWidth: "450", margin: '30px' }}>
                        <CardTitle style={{ color: 'black', height: "175px", background: "url(https://github.com/cbeard22/myNoteKeeper/blob/main/img/getStartScreenshot.png?raw=true) center / cover" }}></CardTitle>
                        <h4 style={{ marginLeft: '10px' }}>My Note Keeper</h4>
                        <CardText>This is a web application that allows the user to enter, track, and delete notes.</CardText>
                        <CardActions border>
                            <a href="https://github.com/cbeard22/myNoteKeeper" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                            <a href="https://agile-lake-65405.herokuapp.com/" target="_blank">
                                <Button colored>Live Demo</Button>
                            </a>
                        </CardActions>
                    </Card>
                
                <hr />
              
                    <Card shadow={5} style={{ minWidth: "450", margin: '30px' }}>
                        <CardTitle style={{ color: 'black', height: "175px", background: "url(https://github.com/cbeard22/teamProfileGenerator/raw/main/develop/img/demoScreenshot.png) center / cover" }}></CardTitle>
                        <h4 style={{ marginLeft: '10px' }}>Team Profile Generator</h4>
                        <CardText>This is a web application that allows the user to retrieve random passwords with the characters that they choose.</CardText>
                        <CardActions border>
                            <a href="https://github.com/cbeard22/teamProfileGenerator" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                            <a href="https://drive.google.com/file/d/1C8RTVAouPfyINE95T8_8D9zIIrhguX2D/view?usp=sharing" target="_blank">
                                <Button colored>Node Video</Button>
                            </a>
                            <a href="https://drive.google.com/file/d/1A2E-8ML3TSov90HUoiPtBGRGoTSdgfNG/view?usp=sharing" target="_blank">
                                <Button colored>Test Video</Button>
                            </a>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{ minWidth: "450", margin: '30px' }}>
                        <CardTitle style={{ color: 'black', height: "175px", background: "url(https://user-images.githubusercontent.com/81100259/116800365-10fa0780-aac6-11eb-9c06-61096ba0913a.png) center / cover" }}></CardTitle>
                        <h4 style={{ marginLeft: '10px' }}>Password Generator</h4>
                        <CardText>This is a web application that allows the user to retrieve random passwords with the characters that they choose.</CardText>
                        <CardActions border>
                            <a href="https://github.com/cbeard22/passwordgenerator" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                            <a href="https://cbeard22.github.io/passwordgenerator/" target="_blank">
                                <Button colored>Live Demo</Button>
                            </a>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{ minWidth: "450", margin: '30px' }}>
                        <CardTitle style={{ color: 'black', height: "175px", background: "url(https://github.com/cbeard22/fitnessTracker/raw/main/img/fitness-tracker-dashboard.png) center / cover" }}></CardTitle>
                        <h4 style={{ marginLeft: '10px' }}>Fitness Tracker</h4>
                        <CardText>This is a web application that allows the user to retrieve random passwords with the characters that they choose.</CardText>
                        <CardActions border>
                            <a href="https://github.com/cbeard22/fitnessTracker" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                            <a href="https://agile-bayou-56340.herokuapp.com/?id=611eb3e1592a900016e9eecf" target="_blank">
                                <Button colored>Live Demo</Button>
                            </a>
                        </CardActions>
                    </Card>
            </div >

        )
    }

}

export default Projects;