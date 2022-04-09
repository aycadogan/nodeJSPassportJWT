import { Card,Tab,Tabs} from '@blueprintjs/core'
import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  const [currentTab, setCurrentTab] = useState('login')


  return (
    <div className="App">
        <Card>
            <Tabs id='Tabs' onChange={setCurrentTab} selectedTabId={currentTab}>
              <Tab id='login' title='Login' panel={<Login />} />
              <Tab id='register' title="Register" panel={<Register />} />
            </Tabs>
        </Card>    
    </div>
  );
}

export default App;
