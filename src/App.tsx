import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Activity } from './components/pages/Activity';
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <ToastContainer pauseOnFocusLoss={false} />
      <Activity />
    </div>
  );
}

export default App;
