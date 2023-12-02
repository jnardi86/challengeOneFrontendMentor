import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Header from "./components/Header"
import Layout from "./components/Layout"
import Main from "./components/Main"
import Services from "./components/Services"
import TestimonialContainer from "./components/TestimonialContainer"


function App() {


  return (
    <Layout>
      <Header />
      <Main />
      <Services />
      <TestimonialContainer/>
      <Gallery/>
      <Footer/>
    </Layout>

  )
}

export default App
