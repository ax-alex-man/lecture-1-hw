
export const Review = ({review}) => {
    return <div>{review.text} - {new Array(review.rating).join('★')}</div>;
};