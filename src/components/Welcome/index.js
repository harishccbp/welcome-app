// Write your code here
import {component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  buttonText = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <h1 className="message">Thank you! Happy Learning</h1>
        <button className="button" type="button" onClick={this.buttonText}>
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
