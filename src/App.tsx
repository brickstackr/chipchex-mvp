import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './Auth'
import Account from './Account'
import { Session } from '@supabase/gotrue-js'
import { Container } from '@material-ui/core'
import AdvancedImageList from './components/ImageList'
import PersistentDrawerLeft from './components/AppBar'
import Example from './CarouselDemo'
import './Example.scss';
import SuggestedGrid from './components/SuggestedGrid/SuggestedGrid';
import Brands from './components/Brands/Brands';
import NewListings from './components/NewListings/NewListings';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
export default function Home() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <Container>
    <PersistentDrawerLeft />
    <Example />
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Auth /> : <Account key={session.user?.id} session={session} />}
    </div>
    <div className="wrapper">
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
  )
}