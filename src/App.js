import React, { Component } from 'react';
import './App.css';

import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';
import Awards from './components/Awards/Awards';
import CountDown from './components/CountDown/CountDown';
import Staffs from './components/Staffs/Staffs';
import Gallery from './components/Gallery/Gallery';
import FormModal from './components/FormModal/FormModal';
import ScheduleTable from './components/ScheduleTable/ScheduleTable';

class App extends Component {
  state = {
    modalOpen: false,
  };

  onOpenModal = () => {
    this.setState({ modalOpen: true });
  };

  onCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <div className="App">
        <Hero onOpenModal={this.onOpenModal} />
        <Description />
        <Awards />
        <CountDown />
        <ScheduleTable />
        <Staffs />
        <Gallery />
        <FormModal
          open={this.state.modalOpen}
          onClose={this.onCloseModal} />
      </div>
    );
  }
}

export default App;
