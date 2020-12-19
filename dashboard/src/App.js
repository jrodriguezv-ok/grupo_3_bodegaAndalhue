import LeftColumn from './components/Leftcolumn';
import Topbar from './components/Topbar';
import Heading from './components/Heading';
import Bodycontentleft from './components/Bodycontentleft';
import Bodycontentright from './components/Bodycontentright';
import Footer from './components/Footer';



function App() {
  return (
    
    <div className="App">
      <div id="wrapper">
          <LeftColumn/>
            <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                   <Topbar/>
                    <div class="container-fluid">
                      <div class="row">
                          <Heading/>
                      </div>
                      <div class="row">
                          <div class="col-lg-6 mb-4">
		                        	<Bodycontentleft/>
                          </div>
                          <div class="col-lg-6 mb-4">						
		                          <Bodycontentright/>
                          </div>
                      </div>
                    </div>
              </div>
          <Footer/>
    
             </div>
        </div>
    </div>
  );
}

export default App;
