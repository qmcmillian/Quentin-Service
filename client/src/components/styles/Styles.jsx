import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Loading = styled.h1`
  font-family: 'PT Sans';
  font-size: 1.3em;
`;

export const LeaveReview = styled.h3`
  font-family: 'PT Sans';
  font-weight: 400;
  margin-top: 75px;
`;

export const ReviewButton = styled.button`
  font-family: "PT Sans";
  background-image: linear-gradient(rgb(244, 226, 181), rgb(240, 195, 80));
  border: 0;
  border-radius: 3px;
  padding: 5px 15px;
  cursor: pointer;
`;

export const BlueTextStyles = styled.p`
  color: ${props => props.hover ? '#C7511F' : '#007185'};
  font-family: 'PT Sans';
  cursor: ${props => props.hover ? 'pointer' : 'none'};
  text-decoration: ${props => props.hover ? 'underline' : 'none'};
  margin: 0;
  font-size: .9em;
`;

export const Headline = styled.h1`
  font-family: 'PT Sans';
  font-size: 1.3em;
  margin: 0;
`;

export const SpacedHeadline = styled.h1`
  font-family: 'PT Sans';
  font-size: 1.3em;
  margin: 20px 0;
`;

export const NoImages = styled.h1`
  font-family: 'PT Sans';
  font-size: 1em;
  font-weight: 400;
  margin: 10px 0;
`;

export const Select = styled.select`
  font-family: 'PT Sans';
  font-size: .7em;
  background-color: #f1f2f2;
  padding: 1px 40px 1px 3px;
  margin-bottom: 22px;
  margin-top: 30px;
  border-radius: 5px;
`;

export const H2 = styled.h2`
  font-family: 'PT Sans';
  font-size: 1em;
  margin: 0 10px 0 0;
`;

export const NoReviews = styled.h2`
  font-family: 'PT Sans';
  font-size: 1em;
`;

export const KeywordStyles = styled.div`
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
  cursor: ${props => props.hover ? 'pointer' : 'none'};
`;

export const CloseBtn = styled.button`
  border: 1px solid #e77600;
  box-shadow: 0 0 3px 2px rgba(228,121,17,.5);
  cursor: pointer;
  height: 45px;
  width: 45px;
  margin-right: 5px;
  border-radius: 3px;
`;

export const ModalHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #D5D9D9;
  border-radius: 8px 8px 0 0;
  background-image: linear-gradient(rgba(251, 251, 251, 1), rgb(242, 242, 242, 1));
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ModalStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '90%',
  backgroundColor: '#fff',
  borderRadius: '20px 20px 8px 8px',
  zIndex: 1000,
};

export const OverlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .5)',
  zIndex: 1000
};

export const modalMain = {
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '70px',
  padding: '15px 25px'
};

export const imgStyle = {
  height: '137px',
  width: '137px',
  marginRight: '5px',
  objectFit: 'cover'
};

export const imageStyles = {
  height: '128px',
  width: '128px',
  margin: '5px',
  objectFit: 'cover'
};

export const ReviewProduct = styled.h1`
  font-family: "PT Sans";
  font-size: 1.3em;
  margin-top: 50px;
  margin-left: 10px;
  padding-top: 50px;
  border-top: 1px solid rgb(209, 209, 209);
  width: 300px;
`;

export const Text = styled.p`
  font-family: 'PT Sans';
  font-size: 1em;
  font-weight: 400;
  margin-top: 10px;
  margin-left: 10px;
`;

export const ReviewProductBtn = styled.button`
  font-family: 'PT Sans';
  height: 29px;
  width: 300px;
  padding: 1px 22px;
  cursor: pointer;
  opacity: .9;
  margin-left: 10px;
  // background-image: linear-gradient(#fcfcfd, #e8e9ec);
  // border-radius: 3px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 35px;
`;

export const NumberOfStars = styled.p`
  color: ${props => props.hover ? '#C7511F' : '#007185'};
  font-family: 'PT Sans';
  margin-right: 3px;
  min-width: 50px;
  cursor: ${props => props.hover ? 'pointer' : 'none'};
  text-decoration: ${props => props.hover ? 'underline' : 'none'};
`;

export const Percentage = styled.p`
  color: ${props => props.hover ? '#C7511F' : '#007185'};
  font-family: 'PT Sans';
  margin-left: 5px;
  margin-right: 0;
  min-width: 50px;
  cursor: ${props => props.hover ? 'pointer' : 'none'};
  text-decoration: ${props => props.hover ? 'underline' : 'none'};
`;

export const fullBarStyle = {
  backgroundColor: '#F0F2F2',
  height: '20px',
  width: '200px',
  borderRadius: '4px',
  boxShadow: 'inset 0 0 0 1px #E3E6E6',
  marginRight: '10px'
};

export const hoverBarStyle = {
  backgroundColor: '#fff6e0',
  height: '20px',
  width: '200px',
  borderRadius: '4px',
  boxShadow: 'inset -2px 0 0 -1px #F5961D, inset 0 0 0 1px #DE7921',
  marginRight: '10px',
  cursor: 'pointer'
};

export const StyledBar = styled.div`
  background-color: #FFA41C;
  border-radius: ${props => props.width === 100 ? '4px' : '4px 0px 0px 4px'};
  height: 100%;
  box-shadow: inset -2px 0 0 -1px #F5961D, inset 0 0 0 1px #DE7921;
  width: ${props => props.width}%;
`;

export const RatingsHeadline = styled.h1`
  font-family: 'PT Sans';
  font-weight: 700;
  width: 300px;
  font-size: 1.7em;
  margin: 0 0 5px 0;
`;

export const NoRatings = styled.h2`
  font-family: 'PT Sans';
  font-weight: 700;
  font-size: 1.2em;
  margin: 5px 0;
`;

export const GrayText = styled.p`
  font-family: 'PT Sans';
  font-size: .9em;
  color: #565959;
  margin: 8px 0;
`;

export const ReviewItemContainer = styled.div`
  margin: 20px 0;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
`;

export const ReviewItemHeadline = styled.h1`
  font-family: 'PT Sans';
  font-size: 1em;
  margin-left: 8px;
`;

export const ReviewText = styled.p`
  font-family: 'PT Sans';
  font-size: 0.9em;
  margin: 5px 0 9px 0;
  max-width: 585px;
`;

export const ReviewGrayText = styled.p`
  font-family: 'PT Sans';
  font-size: .9em;
  color: #565959;
  margin: 3px 0 0 0;
`;

export const Comment = styled.p`
  font-family: 'PT Sans';
  font-size: .9em;
  color: #565959;
  margin: 3px 0 0 0;
  cursor: pointer;
`;

export const Report = styled.p`
  font-family: 'PT Sans';
  font-size: .9em;
  color: #565959;
  width: 90px;
  margin: 3px 0 0 0;
  cursor: pointer;
`;

export const ThinLine = styled.p`
  border-left: 1px solid #d1d1d1;
  padding: 0 15px;
  line-height: 100%;
`;

export const Verified = styled.p`
  font-family: 'PT Sans';
  font-weight: 700;
  font-size: .8em;
  color: #c45500;
  margin: 3px 0 0 0;
`;

export const HelpfulBtn = styled.button`
  font-family: 'PT Sans';
  height: 29px;
  width: 98px;
  padding: 1px 22px;
  cursor: pointer;
  opacity: .9;
  margin-right: 18px;
`;

export const Highlight = styled.span`
  background-color: #FFEBB7;
`;

