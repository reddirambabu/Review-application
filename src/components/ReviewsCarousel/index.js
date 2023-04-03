// Write your code here
import {Component} from 'react'
import './index.css'

let length = 0

class ReviewsCarousel extends Component {
  state = {index: 0}

  decreaseIndex = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(previousIndex => ({index: previousIndex.index - 1}))
    }
  }

  increaseIndex = () => {
    const {index} = this.state
    if (index < length - 1) {
      this.setState(previousIndex => ({index: previousIndex.index + 1}))
    }
  }

  render() {
    const {index} = this.state

    const {reviewsList} = this.props
    length = reviewsList.length

    const {imgUrl, username, companyName, description} = reviewsList[index]

    return (
      <div className="app-container">
        <h1 className="app-heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="user-image" />
        <div className="user-details">
          <button
            type="button"
            className="arrow"
            onClick={this.decreaseIndex}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt="left arrow"
            />
          </button>
          <div className="comments">
            <p className="user-name">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            type="button"
            className="arrow"
            onClick={this.increaseIndex}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
