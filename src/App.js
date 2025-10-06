import logo from './logo.svg';
import './App.css';
import FormComponent from './components/Form';
function App() {
  var arrdata =  [24,25,1,3]
  return (
    <div className="App">
      <FormComponent controlName="Name" control="text" />
      <FormComponent controlName="Name1" control="text" />
      <FormComponent controlName="Year" control="date" />

      <FormComponent controlName="dropdown1" control="dropdown" dataObj={arrdata} />
    </div>
  );
}

export default App;
