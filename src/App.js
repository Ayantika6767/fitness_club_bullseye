
import './App.css';
// import Form from './components/Form';


function App() {
  return (
    <section className="App">
      <h1 className="heading">BookList Maintenance Form</h1>
      <h3 className="small">Add and view your books using local storage</h3>

  <div className="form1">
    <form className="in">
    Title <br/><input className="" /> <br/>  
    Author <br/><input className="" />   <br/> 
    ISBN# <br/><input className="" />   <br/> 
    <button type="button" class="btn btn-success">Add Books</button>
    </form>

    
  </div>
  {/* <div className="div2">No books are added yet</div> */}
    </section>
  );
}

export default App;
