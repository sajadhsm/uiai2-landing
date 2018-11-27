import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';
import Awards from './components/Awards/Awards';
import CountDown from './components/CountDown/CountDown';
import Statistics from './components/Statistics/Statistics';
import Staffs from './components/Staffs/Staffs';
import Gallery from './components/Gallery/Gallery';
import FormModal from './components/FormModal/FormModal';
import ScheduleTable from './components/ScheduleTable/ScheduleTable';
import Footer from './components/Footer/Footer';

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
        <Navbar onOpenModal={this.onOpenModal} />
        <Hero onOpenModal={this.onOpenModal} />
        <Description />
        <Awards />
        <Statistics />
        <CountDown />
        <ScheduleTable />
        <Staffs />
        <Gallery />
        <Footer />
        <FormModal
          open={this.state.modalOpen}
          onClose={this.onCloseModal} />
      </div>
    );
  }
}

export default App;
