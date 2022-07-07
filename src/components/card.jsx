import { Card, Col, Text, Grid, Container } from '@nextui-org/react';

export default function NextUICard() {
  return (
    <Grid.Container gap={0} justify='center' width='100%'>
      <Grid>
        <Card css={{ w: '50%', display: 'flex', justifyContent: 'center' }}>
          <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={14}
                weight='bold'
                transform='uppercase'
                color='#ff0000aa'
              >
                Supercharged
              </Text>
              <Text h4 color='white'>
                Creates beauty like a beast
              </Text>
            </Col>
          </Card.Header>
          <Card.Image
            src='https://nextui.org/images/card-example-2.jpeg'
            width='100%'
            height={240}
            objectFit='center'
            alt='Card image background'
          />
        </Card>
      </Grid>
    </Grid.Container>
  );
}
