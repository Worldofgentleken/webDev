import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import './App.css';

function Home(){
  return(
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}
var contents =[
  {id:1, title:"HTML", description:"HTML is ..."},
  {id:2, title:"JS", description:"JS is ..."},
  {id:3, title:"React", description:"React is ..."},
]

function Topic() {
  var params = useParams();
  var topic_id = params.topic_id;
  var selected_topic = {
    title:'Sorry',
    description:'Not Found'
  };
  for (var i = 0; i < contents.length; i++){
    if(contents[i].id === Number(topic_id)){
      selected_topic = contents[i];
      break;
    }
  }
  console.log(params);
  return(
    <div>
      <h3>Topic...</h3>
    </div>
  );
}

function Topics() {
  var lis = [];
  for (var i=0; i<contents.length; i++){
    lis.push(
      <li key={contents[i].id}><NavLink to={"/topics/"+contents[i].id}>{contents[i].title}</NavLink></li>
    )
  }
  return(
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Routes>
        <Route path='/:topic_id' element={<Topic />} />
      </Routes>
    </div>
  );
}

function Contact() {
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}
function App(){
  return(
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/topics/*' element={<Topics />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/*' element={'Not Found'}></Route>
      </Routes>
    </div>
  );
}

export default App;