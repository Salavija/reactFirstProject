console.log('Pasileido')

for (var i=0; i<10; i++){
    console.log('Pasileido' + i)
}

const component = <h1>Hello, world</h1>;

ReactDOM.render(
    component,
    document.getElementById('root')
);

class HelloComponent extends React.Component{ 
    render() {
        return <div>Hello {this.props.name} </div>;
    }
}

ReactDOM.render(
    <HelloComponent name="Jane"/>,
    document.getElementById('root')
    );