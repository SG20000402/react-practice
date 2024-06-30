// import Message from "./Message"
// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

// function App(){
//   let items = [
//     'New York',
//     'San Francisco',
//     'Tokyo',
//     'London',
//     'Paris'
//   ];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   }

//   return (
//   <div>
//     <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
//   </div>
//   );
// }

function App(){
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>I am death, <b>destroyer</b> of worlds</Alert>}
      <Button color='secondary' onClick={()=>setAlertVisibility(true)}>My button</Button>
    </div>
  )
}

export default App;