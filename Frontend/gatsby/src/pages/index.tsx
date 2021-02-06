import React, { useState } from 'react';
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link } from "gatsby"
import { 
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

import "../styles/grid.scss"

const IndexPage = () => {

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  
  const bull = <span>•</span>;

  return (
    <Layout>
      <SEO title="Home" />
      <div className="grid">
        <div className="inner">
          <div className="col l-9 ip12-6 s-12">
            <Link to="page-2">Page 2</Link>
          </div>
          <div className="col l-3 ip12-6 s-12">
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => setOpen(true)}>Learn More</Button>
            </CardActions>
          </Card>
          </div>
        </div>
      </div>
      Hello World
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>        
      

    </Layout>
  )
}


export default IndexPage
