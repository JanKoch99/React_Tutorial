import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";

function App() {
  return (
    <div className="App">

      <NameList />
      {/*<UserGreeting />*/}
      {/*<ParentComponent />*/}
      {/*<EventBind />*/}
      {/*<FunctionClick/>
      <ClassClick />*/}
      {/*<Counter></Counter>*/}
      {/*<Message/>*/}
      {/*  <Greet name="Jan" heroName="Batman">*/}
      {/*      <p>Dä hed de grössti</p>*/}
      {/*  </Greet>*/}
      {/*  /!*<Greet name="Alessio" heroName="Superman">*!/*/}
      {/*  /!*    <button>Don't press it!</button>*!/*/}
      {/*  /!*</Greet>*!/*/}
      {/*  /!*<Greet name="May" heroName="Wonder Woman"/>*!/*/}
      {/*  /!* *!/*/}
      {/*  <Welcome name="Jan" heroName="Batman" />*/}
        {/*<Welcome name="Alessio" heroName="Superman" />*/}
        {/*/!*<Welcome name="May" heroName="Wonder Woman"/>*!/*/}
    </div>
  );
}

export default App;
