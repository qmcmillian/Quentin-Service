import React, { useState } from 'react';
import styled from 'styled-components';

const Headline = styled.h1`
  font-family: 'PT Sans';
  font-size: 1.3em;
  margin-top: 0;
  margin-bottom: 20px;
`;

const Keyword = styled.div`
  font-family: 'PT Sans';
  font-size: .9em;
  height: 20px;
  background-color: #D7E8EA;
  padding: 0px 14px 10px 14px;
  line-height: 29px;
  margin: 0px 10px 14px 0px;
  border-bottom: solid 1px #969696;
  display: inline-block;
  color: #111111;
`;


class Keywords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: [{text: "Lorem Ipsum", score: 0.880351}, {text: "piece of classical Latin literature", score: 0.78271}, {text: "Richard McClintock", score: 0.759316}, {text: "popular belief", score: 0.752326}, {text: "Hampden-Sydney College", score: 0.68642}, {text: "obscure Latin words", score: 0.667476}, {text: "Latin professor", score: 0.637776}, {text: "Lorem Ipsum passage", score: 0.631327}, {text: "first line of Lorem Ipsum", score: 0.618045}, {text: "classical literature", score: 0.602034}, {text: "book", score: 0.56998}, {text: "treatise", score: 0.539041}]
    }
  }

  componentDidMount() {
    // Keyword extraction API
    var myHeaders = new Headers();
    myHeaders.append("apikey", "EOqzyV2gQYP6t8uOW7GGCpKB0zvqkFIO");

    var raw = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.";

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
    //       keywords: data.result
    //     })
    //   })
    //   .catch(error => console.log('error', error));
  }

  render() {
    console.log('state', this.state);
    return (
      <div>
        <Headline>Read reviews that mention</Headline>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {this.state.keywords.map((keyword, index) => <Keyword key={index}>{keyword.text}</Keyword>)}
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