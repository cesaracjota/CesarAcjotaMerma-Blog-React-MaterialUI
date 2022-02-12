import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
    fixed: true,
    position: "fixed",
    display: "flex",
  },
  toolBar: {
    paddingLeft: 0,
    fontWeight: "bold",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
    url('https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')`,
    height: "350px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      height: 250,
      fontSize: "3em"
    }
  },
  heroText: {
    marginTop: 54,
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    alignItems: "left",
    display: "flex",
  },
  card: {
    maxWidth: "100%",
  },
  media:{
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer:{
    display: "flex",
    justifyContent: "center",
  }
}));


function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Container maxWidth="lg">
          <Toolbar className={classes.toolBar}>
                <Typography variant="h6" color="primary">
                  Blog
                </Typography>
            </Toolbar>
        </Container>
      </AppBar>
      <Box className={classes.hero}>
        <Box className={classes.heroText}>React Blog</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
          <Typography variant="h4" className={classes.blogTitle}>
            Articles
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/760710/pexels-photo-760710.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      React useContext
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar 
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      />
                      <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                          Guy Clemmons
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          May 14, 2021
                        </Typography>
                      </Box>
                  </Box>
                  <Box>
                    <BookmarkBorderIcon/>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      Security
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar 
                      src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      />
                      <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                          Guy Clemmons
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          May 14, 2021
                        </Typography>
                      </Box>
                  </Box>
                  <Box>
                    <BookmarkBorderIcon/>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/907487/pexels-photo-907487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      Java IEEE
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar 
                      src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      />
                      <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                          Guy Clemmons
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          May 14, 2021
                        </Typography>
                      </Box>
                  </Box>
                  <Box>
                    <BookmarkBorderIcon/>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      Audio
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar 
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      />
                      <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                          Guy Clemmons
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                          May 14, 2021
                        </Typography>
                      </Box>
                  </Box>
                  <Box>
                    <BookmarkBorderIcon/>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Box my={4} className={classes.paginationContainer}>
            <Pagination count={10}></Pagination>
          </Box>
      </Container>
      
    </div>
  );
}

export default App;
