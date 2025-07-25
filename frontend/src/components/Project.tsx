import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const Project = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        px: 2,
      }}
    >
      <Container maxWidth="xl" disableGutters sx={{ maxWidth: '1200px', mx: 'auto' }}>
      {/* Right: Skills Grid */}
      <Grid size={{ xs:16, sm:12, md:6 }} sx={{ mt: 7 }}>
        <Typography gutterBottom variant="h4" component="div">Open Source Projects</Typography>
        <Grid container spacing={{ xs: 6, sm:3, md: 2 }}>
          <Grid size={{ xs:12, sm:8, md:4 }} key="pl">
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    MLOps Pipeline Framework
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    A comprehensive MLOps framework for managing machine learning workflows, from data preprocessing to model deployment. Features automated model versioning, A/B testing, and real-time monitoring.
                  </Typography>
                </CardContent>
                <Box sx={{ pl: 1 }}>
                  <Stack direction="row" spacing={1}>
                    <Chip label="Python" variant="outlined" />
                    <Chip label="FastAPI" variant="outlined" />
                    <Chip label="MLflow" variant="outlined" />
                  </Stack>
                </Box>
                <Box sx={{ p: 1 }}>
                  <Stack direction="row" spacing={1}>
                    <Chip label="Docker" variant="outlined" />
                    <Chip label="Kubernetes" variant="outlined" />
                  </Stack>
                 </Box>
              <Divider />
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs:12, sm:8, md:4 }} key="ml">
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Smart Analytics API
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    An intelligent analytics API that uses machine learning to automatically detect patterns, anomalies, and insights in time-series data. Built for real-time processing and scalability.
                  </Typography>
                </CardContent>
                <Box sx={{ pl: 1 }}>
                  <Stack direction="row" spacing={1}>
                    <Chip label="Python" variant="outlined" />
                    <Chip label="TensorFlow" variant="outlined" />
                    <Chip label="Redis" variant="outlined" />
                  </Stack>
                </Box>
                <Box sx={{ p: 1 }}>
                  <Stack direction="row" spacing={1}>
                    <Chip label="PostgreSQL" variant="outlined" />
                    <Chip label="Celery" variant="outlined" />
                  </Stack>
                </Box>
              <Divider />
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs:12, sm:8, md:4 }} key="cloud">
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    AI-Powered Code Review
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    An automated code review tool that uses natural language processing to analyze code quality, suggest improvements, and detect potential security vulnerabilities.
                  </Typography>
                </CardContent>
                <Box sx={{ pl: 1 }}>
                  <Stack direction="row" spacing={1}>
                    <Chip label="Python" variant="outlined" />
                    <Chip label="Scikit-learn" variant="outlined" />
                    <Chip label="InfluxDB" variant="outlined" />
                  </Stack>
                </Box>
                <Box sx={{ p: 1 }}>
                  <Stack direction="row" spacing={1}>
                    <Chip label="Grafana" variant="outlined" />
                    <Chip label="MQTT" variant="outlined" />
                  </Stack>
                </Box>
              <Divider />
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs:12, sm:8, md:4 }} key="maintenance">
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Predictive Maintenance System
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    A machine learning system for predicting equipment failures using IoT sensor data. Implements ensemble methods and real-time alerting for industrial applications.
                  </Typography>
                </CardContent>
                <Box sx={{ pl: 1 }}>
                  <Stack direction="row" spacing={1}>
                    <Chip label="Python" variant="outlined" />
                    <Chip label="Transformers" variant="outlined" />
                    <Chip label="OpenAI API" variant="outlined" />
                  </Stack>
                </Box>
                <Box sx={{ p: 1 }}>
                  <Stack direction="row" spacing={1}>
                    <Chip label="AST" variant="outlined" />
                    <Chip label="Github API" variant="outlined" />
                  </Stack>
                </Box>
              <Divider />
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs:12, sm:8, md:4 }} key="leadership">
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Distributed ML Training
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    A framework for distributed machine learning training across multiple nodes. Optimizes communication and reduces training time for large-scale deep learning models.
                  </Typography>
                </CardContent>
                <Box sx={{ pl: 1 }}>
                  <Stack direction="row" spacing={1}>
                    <Chip label="Python" variant="outlined" />
                    <Chip label="PyTorch" variant="outlined" />
                    <Chip label="Ray" variant="outlined" />
                  </Stack>
                </Box>
                <Box sx={{ p: 1 }}>
                  <Stack direction="row" spacing={1}>
                    <Chip label="Kubernetes" variant="outlined" />
                    <Chip label="Horovod" variant="outlined" />
                  </Stack>
                </Box>
              <Divider />
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs:12, sm:8, md:4 }} key="engine">
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Recommendation Engine
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    A hybrid recommendation system combining collaborative filtering and content-based approaches. Features real-time personalization and explainable AI capabilities.
                  </Typography>
                </CardContent>
                <Box sx={{ pl: 1 }}>
                  <Stack direction="row" spacing={1}>
                    <Chip label="Python" variant="outlined" />
                    <Chip label="TensorFlow" variant="outlined" />
                    <Chip label="Apache Spark" variant="outlined" />
                  </Stack>
                </Box>
                <Box sx={{ p: 1 }}>
                  <Stack direction="row" spacing={1}>
                    <Chip label="Elasticsearch" variant="outlined" />
                    <Chip label="FastAPI" variant="outlined" />
                  </Stack>
                </Box>
              <Divider />
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
       </Grid>
      </Container>
    </Box>
  );
};

export default Project;
