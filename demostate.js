
class Clock extends React.Component{

    constructor(props){
        //hello
       super(props)
       this.state={mydate:new Date(),
                    isToggle:true}
    }
    componentDidMount(){
        this.myId=setInterval(()=>this.changeDate(),1000)
    }

    componentWillUnmount(){
               clearInterval(this.myId)
    }

    changeDate(){
        this.setState({mydate:new Date()})
    }
    btnClick=()=>{
        this.setState(state=>({isToggle:!state.isToggle}))
    }

    render(){

        return(
            <div className="container">
                <h2>Hello , state..</h2>
                <h2>Time is : {this.state.mydate.toLocaleTimeString()}</h2>
                <button className="btn btn-success" onClick={this.btnClick}>
                    {this.state.isToggle?'ON':'OFF'}</button>
            </div>
        );
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Clock></Clock>);