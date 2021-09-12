import React, { Component } from 'react';
import { Link, Card, CardTitle, CardText, CardMenu, CardActions, Button, IconButton, CardMedia } from 'react-mdl'
class Projects extends Component {
    render() {
        return (
            <div className="projects-grid">
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: 'black', height: "175px", background: "url(http://localhost:3000/portfolio_react/img/poggers.png) center / cover" }}>Snaccidental Recipe</CardTitle>
                    <CardText>This is a web application that allows the user to search for recipes based on their ingredient or cuisine input.</CardText>
                    <CardActions border>
                        <a href="https://github.com/cbeard22/snaccidental-recipe" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                        <a href="https://cbeard22.github.io/snaccidental-recipe/" target="_blank">
                            <Button colored>Live Demo</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="snaccidental" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: 'black', height: "175px", src: ".img/img/poggers.png center / cover" }}>Poggers</CardTitle>
                    <CardText>This web application allows a user to login. It then keeps track of their logged games and tasks to help them keep track of objectives.</CardText>
                    <CardActions border>
                        <a href="https://github.com/cbeard22/poggers" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                        <a href="https://poggers-pog.herokuapp.com/login/" target="_blank">
                            <Button colored>Live Demo</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="poggers" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: 'black', height: "175px", background: "url(https://github.com/cbeard22/snaccidental-recipe/blob/main/assets/images/screenshot.png) center / cover" }}>My Note Keeper</CardTitle>
                    <CardText>This is a web application that allows the user to enter, track, and delete notes.</CardText>
                    <CardActions border>
                        <a href="https://github.com/cbeard22/myNoteKeeper" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                        <a href="https://agile-lake-65405.herokuapp.com/" target="_blank">
                            <Button colored>Live Demo</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="snaccidental" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle style={{ color: 'black', height: "175px", background: "url(https://github.com/cbeard22/snaccidental-recipe/blob/main/assets/images/screenshot.png) center / cover" }}>Password Generator</CardTitle>
                    <CardText>This is a web application that allows the user to retrieve random passwords with the characters that they choose.</CardText>
                    <CardActions border>
                        <a href="https://github.com/cbeard22/passwordgenerator" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                        <a href="https://cbeard22.github.io/passwordgenerator/" target="_blank">
                            <Button colored>Live Demo</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="snaccidental" />
                    </CardMenu>
                </Card>
            </div>
        )
    }

}

export default Projects;