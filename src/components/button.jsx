import { Button, Grid } from '@nextui-org/react';

export default function NextUIButton() {
  return (
    <Grid.Container gap={1}>
      <Grid>
        <Button color='primary' auto>
          Primary
        </Button>
      </Grid>
      <Grid>
        <Button color='secondary' auto>
          Secondary
        </Button>
      </Grid>
      <Grid>
        <Button color='success' auto>
          Success
        </Button>
      </Grid>
      <Grid>
        <Button color='warning' auto>
          Warning
        </Button>
      </Grid>
      <Grid>
        <Button color='error' auto>
          Error
        </Button>
      </Grid>
      <Grid>
        <Button color='gradient' auto>
          Gradient
        </Button>
      </Grid>
      <Grid.Container gap={1}>
        <Grid>
          <Button auto color='primary' rounded>
            Primary
          </Button>
        </Grid>
        <Grid>
          <Button auto color='secondary' rounded flat>
            Secondary
          </Button>
        </Grid>
        <Grid>
          <Button auto color='success' rounded bordered>
            Success
          </Button>
        </Grid>
        <Grid>
          <Button auto color='warning' rounded flat>
            Warning
          </Button>
        </Grid>
        <Grid>
          <Button auto color='error' rounded bordered>
            Error
          </Button>
        </Grid>
        <Grid>
          <Button auto color='gradient' rounded bordered>
            Gradient
          </Button>
        </Grid>
      </Grid.Container>
    </Grid.Container>
  );
}
