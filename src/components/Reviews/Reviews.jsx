import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getReviewMovie } from 'components/services/api';

import { ReviewInfo, ReviewsAuthor, ReviewsComment, ReviewText, ReviewUL, ReviewWrap } from './Reviews.styled';

function Reviews() {
    const { id } = useParams();
    const [review, setReview] = useState(null);

    useEffect(() => {
        getReviewMovie(id)?.then(setReview);
    }, [id]);

    return (
        <ReviewWrap>
            <ReviewUL>
                {review?.length === 0 ? (
                    <ReviewInfo>We don't have any reviews for this movies</ReviewInfo>
                ) : (
                    review?.map(({ author, content, id }) => (
                        <ReviewText key={id}>
                            <ReviewsAuthor>Author: {author}</ReviewsAuthor>
                            <ReviewsComment> {content}</ReviewsComment>
                        </ReviewText>
                    ))
                )}
            </ReviewUL>
        </ReviewWrap>
    );
}

Reviews.propTypes = {
    width: PropTypes.number,
    url: PropTypes.string,
    name: PropTypes.string,
};

export default Reviews;