import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Home extends Component {
    render() {
        return (
            <div style={{ width: '100', margin: 'auto' }}>
                <Grid className="home-grid">
                    <Cell col={12}>

                        <div className="banner-text">
                            <img
                                src="http://localhost:3000/portfolio_react/img/chrisbeard.jpg"
                                alt="Chris Beard"
                                className="chrisBeard" />
                            <h1> Full Stack Web Developer</h1>
                            <hr />

                            <p>HTML/CSS | Bootstrap | Javascript | React | NodeJS | Express | MongoDB</p>
                            <div className="social-links">
                                <a href="https://github.com/cbeard22" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github" aria-hidden="true" />
                                </a>
                                <a href="mailto:mr.chrisbeard@gmail.com" rel="noopener noreferrer" target="_blank">
                                    <i class="fas fa-envelope-square" aria-hidden="true" />
                                </a>
                                <a href="https://www.linkedin.com/in/chris-beard-aa3a2b112/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Home;