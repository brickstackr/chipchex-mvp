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
    </Container>
  )
}