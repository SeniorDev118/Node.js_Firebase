import React  from 'react/addons';



var Message = React.createClass({

  render(){
    return (
      <li onClick={ this.props.handleClick.bind(null, this.props.index) } className={ this.props.show ? 'bg-warning' : 'bg-info'}>
        <button onClick={ this.props.removeMessage.bind(null, this.props.index) } className='btn btn-danger'>X</button>
        { this.props.thread.title }
        { this.props.show && <p> { this.props.thread.message } </p> }
      </li>
      
    )
  }

})


export default Message
