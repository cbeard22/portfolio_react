import React, { Component } from 'react';
import {Card, Grid, Cell} from 'react-mdl';

class About extends Component {
    render() {
        return (
            <div className="about-body">
                <h1>About Chris Beard</h1>
                <Grid className="about-pictures">
                    <Cell col={4}>
                    <img
                            src="http://localhost:3000/portfolio_react/img/poggers.png"
                            alt="Chris Beard"
                            style={{ height: '250px' }}
                            className="chrisBeard2"
                        />
                    </Cell>
                    <Cell col={4}>
                    <img
                            src="http://localhost:3000/portfolio_react/img/chrisBeard2.jpg"
                            alt="Chris Beard"
                            style={{ height: '250px' }}
                            className="chrisBeard2"
                        />
                    </Cell>
                    <Cell col={4}>
                    <img
                            src="http://localhost:3000/portfolio_react/img/puppy.jpg"
                            alt="Chris Beard"
                            style={{ height: '250px' }}
                            className="chrisBeard2"
                        />
                    </Cell>
<p>My name is Chris Beard and I am a entry level Full Stack Web Developer. I was previously an elementary school teacher, but I am looking to change my career. I love to problem solve and debug code. I am excited for this new experience. In my free time I like to Wakesurf, build things from wood, and hang out with my wife and new puppy.</p>
                </Grid>
            </div>
        )
    }
}
export default About;