import React ,{ Component }from 'react';
import CardList from './CardList';
import { robot } from './robot';
import Searchbox from './Searchbox';

class App extends Component{
    constructor()
    {
        super()
        this.state = {
            robot: robot,
            searchfield: ''
        }
    }
    onSearchChange = (event) =>{
        this.setState({ searchfield : event.target.value})
       
    }
    render(){
        const filteredrobots = this.state.robot.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(<div className = 'tc'>
            <h1>Robofriends</h1>
        <Searchbox searchChange = {this.onSearchChange} />
         <div style = {{overflowY:"scroll" , height : "610px", border: "1px solid black"}}>
        <CardList robot = {filteredrobots}/></div>
        </div>);
    }
}
export default App;