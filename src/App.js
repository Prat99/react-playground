import React from 'react';
import FormikForm from './components/forms/FormikForm';
import BaiscForm from './components/forms/basicForm';
import UpdatePerson from './components/hooks/useStateHook';
import MyEnhancedForm from './components/forms/AdvanceForms';
import LoginForm from './components/mosh/forms/LoginForm';
import CreatePerson from './components/mosh/forms/createPerson';



function App() {
  return (
    <div className="App">
      {/* <FormikForm></FormikForm> */}
    {/* <UpdatePerson></UpdatePerson> */}
    {/* <MyEnhancedForm></MyEnhancedForm> */}
     {/* <LoginForm></LoginForm> */}
     <CreatePerson></CreatePerson>
    </div>
  );
}

export default App;
