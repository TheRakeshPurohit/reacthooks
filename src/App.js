import React from 'react';
import './App.css';
import MultiCountReducers from './components/MultiCountReducers';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <MultiCountReducers />
      {/* <CountReducerTwo /> */}
      {/* <UserContext.Provider value={'Rakesh'}>
                <ChannelContext.Provider value={'The Big Bang Theory'}>
                  <ComponentC />
                </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <HookMouse /> */}
      {/* <ClassMouse /> */}
      {/* <EffectCounterFunc /> */}
      {/* <ClassCounterOne /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterArray /> */}
    </div>
  );
}

export default App;
