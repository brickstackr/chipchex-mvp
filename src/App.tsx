import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './Auth'
import Account from './Account'
import { Session } from '@supabase/gotrue-js'
import { Container } from '@mui/material'
import AppBarHeader from './components/AppBar'
import SuggestedGrid from './components/SuggestedGrid/SuggestedGrid';
import Brands from './components/Brands/Brands';
import NewListings from './components/NewListings/NewListings';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createMuiTheme} from '@mui/material/styles';
import { makeStyles } from '@mui/styles'
import { Card } from '@mui/material';
import CardCarousel from './components/CardCarousel/CardCarousel';
import { Grid } from '@mui/material';

const theme = createMuiTheme();

const useStyles = makeStyles((theme:any) => {
  root: {
    // some css that access to theme
  }
});

export default function Home() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
    <Container>
    <AppBarHeader />

    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Auth /> : <Account key={session.user?.id} session={session} />}
    </div>
    <div className="wrapper">
    <Grid>
    <CardCarousel />
    </Grid> 
      <h1>Browse</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/brands">
              <Brands />
            </Route>
            <Route path="/new-listings">
              <NewListings />
            </Route>
            <Route path="/suggested-grid">
              <SuggestedGrid />
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
    </Container>
    </ThemeProvider>
  )
}