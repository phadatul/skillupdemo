
class Hello extends React.Component{
    render(){
        return (
            <div className="container">
                <h2>This is class based component...</h2>
                <p>Props can be accessed like this name:{this.props.name}</p>
                <p> Age: {this.props.age}</p>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Hello name="abcd" age="21"></Hello>);