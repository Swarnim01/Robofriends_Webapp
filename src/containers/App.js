import React ,{ Component }from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import { robot } from '../robot';
import Searchbox from '../components/Searchbox';
import { setSearchField } from '../action';

const mapStateToProps = state => {
    return{
            searchField:state.searchField
    }
}
const mapDispatchToProps = (dispatch) => {
    return {onSearchChange : (e) => {
        dispatch(setSearchField(e.target.value))
    }}
}

class App extends Component{
    constructor()
    {
        super()
        this.state = {
            robot: robot,
        }
    }
    render(){
        const {onSearchChange,searchField} = this.props;
        const filteredrobots = this.state.robot.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return(<div className = 'tc'>
            <h1>Robofriends</h1>
        <Searchbox searchChange = {onSearchChange} />
         <div style = {{overflowY:"scroll" , height : "610px", border: "1px solid black"}}>
        <CardList robot = {filteredrobots}/></div>
        </div>);
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(App);