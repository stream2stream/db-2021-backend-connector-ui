import logo from './logo.svg';
import './App.css';
import {Form} from './login_form'
import {appStyle} from './login_form_styling';


const App = () => {
  const handleSubmit = data => {
      const json = JSON.stringify(data, null, 4);
      console.clear();
      console.log(json);
  };
  return (
    <div style={appStyle}>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
