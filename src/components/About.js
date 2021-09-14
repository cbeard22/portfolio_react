import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return (
            <div className="about-body">
                <Grid className="about-pictures">
                    <Cell col={4}>
                        <img
                            src="http://localhost:3000/portfolio_react/img/puppy.jpg"
                            alt="Chris Beard"
                            style={{ height: '300px', borderRadius: "50px" }}
                            className="about1"
                        />
                    </Cell>
                    <Cell col={4}>
                        <img
                            src="http://localhost:3000/portfolio_react/img/chrisandem.jpg"
                            alt="Chris Beard"
                            style={{ height: '300px', borderRadius: "50px" }}
                            className="about1"
                        />
                    </Cell>
                    <Cell col={4}>
                        <img
                            src="http://localhost:3000/portfolio_react/img/chrisandem2.jpg"
                            alt="Chris Beard"
                            style={{ height: '300px', borderRadius: "50px" }}
                            className="about1"
                        />
                    </Cell>
                    <Cell col={12}>
                            <p className='aboutMe'>My name is Chris Beard and I am an entry level Full Stack Web Developer. I was previously an elementary school teacher for 10 years, and I am exicted for a new experience in web development. I have always loved to problem solve and recently I have discovered a passion for debugging code. In my free time I like to wakesurf, fix old motors, and hang out with my wife and new puppy.</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default About;