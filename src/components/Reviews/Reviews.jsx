import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { getReviewMovie } from 'components/services/api';

import {ReviewText, ReviewUL, ReviewWrap} from './Reviews.styled';

function Reviews() {
    const { id } = useParams();
    const [review, setReview] = useState(null);
    useEffect(() => {
        getReviewMovie(id)?.then(setReview);
    }, [id, review?.length]);

    return (
        <ReviewWrap>
            {/* <h3>Reviews:</h3> */}
            <ReviewUL>
                {review?.length === 0 ? (
                    <p>We don't have any reviews for this movies</p>
                ) : (
                    review?.map(({ author, content, id }) => (
                        <ReviewText key={id}>
                            <h3>Author: {author}</h3>
                            <p> {content}</p>
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