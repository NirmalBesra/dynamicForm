import logo from './logo.svg';
import './App.css';
import FormComponent from './components/Form';
function App() {
  var arrdata =  [24,25,1,3]
  var radioObj = [["name1","label1"],["name2","label2"]];
  return (
    <div className="App">
      <FormComponent controlName="Name" control="text" />
      <FormComponent controlName="Name1" control="text" />
      <FormComponent controlName="Year" control="date" />
      <FormComponent controlName="checkBox1" control="checkbox" />
      <FormComponent controlName="RadioTest" control="radio" dataObj={radioObj} />
      <FormComponent controlName="dropdown1" control="dropdown" dataObj={arrdata} />
    </div>
  );
}

export default App;
