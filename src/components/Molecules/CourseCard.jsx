import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseCard = ({id, title, image, price, professor}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt={title} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            { 
                <h3 className="t5 s-mb-2 s-center">{title}</h3>
            }
            <div className="s-main-center">
                {`${professor}`}
            </div>
            <div className="s-main-center">
                <Link className="button--ghost-alert button--tiny" to={`/CourseCards/${id}`}>
                    {`$ ${price} USD`}
                </Link>
            </div>
        </div>
    </article>
);

CourseCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    professor: PropTypes.string
}

CourseCard.defaultProps = {
    title: "No se encontró un título",
    image: "https://www.enter.co/wp-content/uploads/2017/05/blanco-y-negro-768x432.jpg",
    price: '--',
    professor: "",
}

export default CourseCard