import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BoxNews from "./BoxNews";
import BoxEvent from './BoxEvent';


function Tabbed() {
  return (
<Tabs
  defaultActiveKey="profile"
  id="justify-tab-example"
  className="mb-3 font-bold"
  style={{ backgroundColor: 'black'}}
  justify
>
  <Tab eventKey="News" title='News'>
    <BoxNews />
    <div className="d-flex justify-content-center mt-4">
      <button className='myButton'>Selengkapnya</button>
    </div>
  </Tab>
  <Tab eventKey="Event" title='Event'>
    <div className='align-text-center'></div>
    <BoxEvent />
    <div className="d-flex justify-content-center mt-4">
      <button className='myButton'>Selengkapnya</button>
    </div>
  </Tab>
</Tabs>
  );
}

export default Tabbed;