import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>

                    <div style={{ display: 'flex' }}>
                        <p className="skill-name">{this.props.skill}</p>
                        <ProgressBar className="progress-line" style={{ margin: 'auto', width: '60%' }} progress={this.props.progress} />
                    </div>
                </Cell>
            </Grid>
        )
    }
}
export default Skills;