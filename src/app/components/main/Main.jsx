import React, { PropTypes } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import Compose from '../compose/Compose';
import Filter from '../filter/Filter';
import Timeline from '../timeline/Timeline';
import Slideshow from '../slideshow/Slideshow';

function Main(props) {
  return (
    <Container>
      <Grid celled>
        <Grid.Row columns={1}>
          <Grid.Column width={16}>
            <Header>Notify</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column mobile={16} tablet={10} computer={10}>
            <Container>
              <Compose {...props} />
              <Filter {...props} />
              <Timeline {...props} />
            </Container>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={6} computer={6}>
            <Container>
              <Slideshow {...props} />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

Main.PropTypes = {};

export default Main;
