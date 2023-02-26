import React,{Component} from "react";
import Cardlist from "./Cardlist";
import Searchbox from "./Searchbox";
import Scroll from './Scroll';
import { Robot } from "./Robot";
import ErrorBoundary from "./ErrorBoundary";
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state = {
            Robot: Robot,
            Searchfield: ''
        }
    }
    onSearchChange=(event) => {
        this.setState({ Searchfield: event.target.value })
    }   
    render(){
        const filteredRobot = this.state.Robot.filter(Robot => {
            return Robot.Name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
        })
        return(
            <div className="tc">
                 <h1 className="f1">RobotFriends</h1>
                 <Searchbox SearchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                    <Cardlist Robot={filteredRobot}/>
                    </ErrorBoundary>
                   
                    
                 </Scroll>
            </div>
            
        );
    }
   
}

export default App;