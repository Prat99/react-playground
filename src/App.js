import React from 'react';
import FormikForm from './components/forms/FormikForm';
import BaiscForm from './components/forms/basicForm';
import UpdatePerson from './components/hooks/useStateHook';
import MyEnhancedForm from './components/forms/AdvanceForms';
import LoginForm from './components/mosh/forms/LoginForm';


function App() {
  return (
    <div className="App">
      {/* <FormikForm></FormikForm> */}
    {/* <UpdatePerson></UpdatePerson> */}
    {/* <MyEnhancedForm></MyEnhancedForm> */}
     <LoginForm></LoginForm>
    </div>
  );
}

export default App;
