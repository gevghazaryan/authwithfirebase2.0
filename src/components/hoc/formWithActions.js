import React from 'react';

// const formWithAction = (Component) => {
//     return  <Component {...this.props} />
// }


const formWithAction = (Component) => 
    class extends React.Component {
        constructor(props) {
            super(props);
            this.onClick = this.onClick.bind(this);
            this.onChange = this.onChange.bind(this)
        }
        onClick(event)  {
            console.log(this.state)
            event.preventDefault();
        }
        onChange(event) {
            this.setState({ [event.target.name] : event.target.value })
            console.log(event.target.name,event.target.value)
        }
        render() {
            return <Component clickHandler={this.onClick} onChange={this.onChange}/>
        }
    }

export default formWithAction