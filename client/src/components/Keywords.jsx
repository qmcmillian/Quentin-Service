import React, { useState } from 'react';
import styled from 'styled-components';

const Headline = styled.h1`
  font-family: 'PT Sans';
  font-size: 1.3em;
  margin: 20px 0;
`;

const Keyword = styled.div`
  font-family: 'PT Sans';
  font-size: .9em;
  height: 20px;
  background-color: ${props => props.selected ? '#00464F' : '#D7E8EA'};
  padding: 0px 14px 10px 14px;
  line-height: 29px;
  margin: 0px 10px 14px 0px;
  border-bottom: solid 1px #969696;
  display: inline-block;
  color: ${props => props.selected ? '#FFF' : '#111111'};
`;


class Keywords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // sample data
      keywords: [{text: "Lorem Ipsum", score: 0.880351}, {text: "piece of classical Latin literature", score: 0.78271}, {text: "Richard McClintock", score: 0.759316}, {text: "popular belief", score: 0.752326}, {text: "Hampden-Sydney College", score: 0.68642}, {text: "obscure Latin words", score: 0.667476}, {text: "Latin professor", score: 0.637776}, {text: "Lorem Ipsum passage", score: 0.631327}, {text: "first line of Lorem Ipsum", score: 0.618045}, {text: "classical literature", score: 0.602034}, {text: "book", score: 0.56998}, {text: "treatise", score: 0.539041}, {text: 'a', score: 0.456789}, {text: 'S', score: 0.246789}],
      selectedKeywordIndex: null
    }

    this.handleKeywordBtnClick = this.handleKeywordBtnClick.bind(this);
  }

  handleKeywordBtnClick(index) {
    const setKeyword = this.state.selectedKeywordIndex !== index ? index : null;
    this.setState({
      selectedKeywordIndex: setKeyword
    });

    this.props.setKeywordFilter(this.state.keywords[index].text);
  }

  // instead of setting props to state within the constructor
  componentWillReceiveProps(nextProps) {
    if (!nextProps.filterByKeyword) {
      this.setState({
        selectedKeywordIndex: null
      });
    }
  }

  componentDidMount() {
    let raw = '';
    this.props.domesticReviews.forEach(review => raw += review.full_text);

    // Keyword extraction API
    var myHeaders = new Headers();
    // Move this API key into a .env, and .gitignore the file
    // install dotenv?
    myHeaders.append("apikey", "EOqzyV2gQYP6t8uOW7GGCpKB0zvqkFIO");

    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
      headers: myHeaders,
      body: raw
    };

    // fetch("https://api.promptapi.com/keyword", requestOptions)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('result', data);
    //     console.log('result result', data.result);
    //     this.setState({
    //       keywords: data.result.slice(0, 8)
    //     })
    //   })
    //   .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div>
        <Headline>Read reviews that mention</Headline>
        <div style={{display: 'flex', flexWrap: 'wrap', maxWidth: '585px', minWidth: '450px'}}>
        {this.state.keywords.map((keyword, index) => <Keyword selected={this.state.selectedKeywordIndex === index} key={index} onClick={() => this.handleKeywordBtnClick(index)}>{keyword.text}</Keyword>)}
        </div>
      </div>
    )
  }
};

export default Keywords;

/*

keywords: Array(20)
0: {text: "Lorem Ipsum", score: 0.880351}
1: {text: "piece of classical Latin literature", score: 0.78271}
2: {text: "Richard McClintock", score: 0.759316}
3: {text: "popular belief", score: 0.752326}
4: {text: "Hampden-Sydney College", score: 0.68642}
5: {text: "obscure Latin words", score: 0.667476}
6: {text: "Latin professor", score: 0.637776}
7: {text: "Lorem Ipsum passage", score: 0.631327}
8: {text: "first line of Lorem Ipsum", score: 0.618045}
9: {text: "classical literature", score: 0.602034}
10: {text: "book", score: 0.56998}
11: {text: "treatise", score: 0.539041}
12: {text: "Virginia", score: 0.536297}
13: {text: "roots", score: 0.532997}
14: {text: "sections", score: 0.5239}
15: {text: "theory of ethics", score: 0.520955}
16: {text: "line", score: 0.517904}
17: {text: "cites of the word", score: 0.513845}
18: {text: "Cicero", score: 0.513089}
19: {text: "section", score: 0.511957}


*/