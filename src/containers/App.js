import React ,{ Component,useEffect }from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import { requestRobots, setSearchField } from '../action';

const mapStateToProps = state => {
    return{
            searchField:state.searchRobots.searchField,
            robots:state.requestRobots.robots,
            isPending:state.requestRobots.isPending,
            error : state.requestRobots.error

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange : (e) => dispatch(setSearchField(e.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}
class App extends Component{
componentDidMount(){
    this.props.onRequestRobots();
}
    render(){
        const {onSearchChange,searchField,robots,isPending} = this.props;
        const filteredrobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return(
            isPending ? <h1 style = {{display:"flex",justifyContent:"center",alignItems:"center"}}>Loading</h1> :
        (<div className = 'tc'>
            <h1>Robofriends</h1>
        <Searchbox searchChange = {onSearchChange} />
         <div style = {{overflowY:"scroll" , height : "610px", border: "1px solid black"}}>
        <CardList robot = {filteredrobots}/></div>
        </div>));
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(App);