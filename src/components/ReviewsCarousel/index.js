// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  onLeft = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onRight = () => {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevSate => ({
        activeReviewIndex: prevSate.activeReviewIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReviewIndex
    ]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="reviewDetailsContainer">
          <button
            type="button"
            className="button"
            onClick={this.onLeft}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <div className="list">
            <img src={imgUrl} alt={username} className="profile-img" />
            <p className="username">{username}</p>
            <p className="companyName">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            type="button"
            className="button"
            onClick={this.onRight}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
