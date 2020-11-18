import React, { Component } from 'react';
import ReviewItem from './ReviewItem.jsx';
import Keywords from './Keywords.jsx';
import BlueText from './BlueText.jsx';
import styled from 'styled-components';

const Headline = styled.h1`
  font-family: 'PT Sans';
  font-size: 1.3em;
  margin: 0;
`;

const Select = styled.select`
  font-family: 'PT Sans';
  font-size: .7em;
  background-color: #f1f2f2;
  padding: 1px 40px 1px 3px;
  margin-bottom: 22px;
  margin-top: 30px;
  border-radius: 5px;
`;

const H2 = styled.h2`
  font-family: 'PT Sans';
  font-size: 1em;
  margin: 0 10px 0 0;
`;


class DomesticReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // is initializing state in the component with props an 'anti-pattern'?
      // it’s not an anti-pattern if you make it clear that the prop is only seed data for the component’s internally-controlled state
      reviews: this.props.domesticReviews,
      topReviews: [],
      mostRecent: [],
      filterBySelect: 'top',
      filterByKeyword: false,
      sortByStars: false
    };

    this.toggleSelectFilter = this.toggleSelectFilter.bind(this);
    this.setKeywordFilter = this.setKeywordFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.showFilterText = this.showFilterText.bind(this);
  }

  componentWillMount() {
    const top = [...this.state.reviews].sort((a, b) => (a.helpful < b.helpful) ? 1 : -1);
    const recent = [...this.state.reviews].sort((a, b) => {
      return (new Date(b.review_date) > new Date(a.review_date)) ? 1 : -1;
    });
    this.setState({
      topReviews: top,
      mostRecent: recent
    });
  }

  toggleSelectFilter(topOrRecent) {
    this.setState({
      filterBySelect: topOrRecent
    });
  }

  setKeywordFilter(keyword) {
    if (keyword === this.state.filterByKeyword) {
      this.clearFilter();
    } else {
      this.setState({
        filterByKeyword: keyword
      });
    }
  }

  clearFilter(clearAll) {
    if (clearAll) {
      this.setState({
        filterByKeyword: false,
        sortByStars: false
      });
    } else {
      this.setState({
        filterByKeyword: false
      });
    }
  }

  showFilterText(numReviews) {
    let filterText = `Showing ${numReviews} review${numReviews !== 1 ? 's' : ''} with `;

    let additionalText = '';
    if (this.state.filterByKeyword) {
      additionalText += `"${this.state.filterByKeyword}"`;
    }

    if (additionalText.length && this.state.sortByStars) {
      additionalText += ' and ';
    }

    if (this.state.sortByStars) {
      additionalText += `${this.state.sortByStars} stars`;
    }

    return filterText + additionalText;
  }

  // instead of setting props to state within the constructor
  componentWillReceiveProps(nextProps) {
    if (nextProps.sortByStars !== this.props.sortByStars) {
      this.setState({ sortByStars: nextProps.sortByStars })
    }
  }

  render() {
    let {reviews, topReviews, mostRecent, filterBySelect, filterByKeyword, sortByStars} = this.state;

    let filteredReviews = filterBySelect === 'top' ? topReviews : mostRecent;

    if (filterByKeyword) {
      filteredReviews = filteredReviews.filter(review => review.full_text.includes(filterByKeyword));
    }

    if (sortByStars) {
      filteredReviews = filteredReviews.filter(review => review.overall_rating === sortByStars);
    }

    return (
      <div style={{marginBottom: '50px'}}>
        <Keywords setKeywordFilter={this.setKeywordFilter} domesticReviews={reviews} filterByKeyword={filterByKeyword}/>
        {reviews.length ?
          <div>
          <Select value={filterBySelect} onChange={(e) => this.toggleSelectFilter(e.target.value)}>
            <option value="top">Top reviews</option>
            <option value="recent">Most recent</option>
          </Select>
          <Headline>Top reviews from the United States</Headline>
          {(filterByKeyword || sortByStars) &&
          <div style={{display: 'inline-flex', alignItems: 'center', marginTop: '15px'}}>
            <H2>{this.showFilterText(filteredReviews.length)}</H2>
            <BlueText onClick={() => this.clearFilter('all')}>Clear filter</BlueText>
          </div >}
          {filteredReviews.map((review, index) => <ReviewItem key={index} review={review} keyword={filterByKeyword}/>)}
        </div>
        :
        <H2>No reviews from the United States</H2>}
      </div>
    );
  }
};

export default DomesticReviews;

