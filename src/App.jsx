import './App.css'
import NavBar from './components/NavBAr/NavBar'
import MyRoutes from './routes/MyRutes'

const App = () => {
  return (
    <div className=''>
      <NavBar/>
      <section className='mt-12'>
         <MyRoutes/>
      </section>
    </div>
  )
}

export default App