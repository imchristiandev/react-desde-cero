import React from 'react';
import CourseCard from '../Molecules/CourseCard';

const courses = [
    {
        "id": 1,
        "title": "React desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
        "price": 20,
        "professor": "Beto Quiroga"
    },
    {
        "id": 2,
        "title": "Go desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png",
        "price": 20,
        "professor": "Beto Quiroga"
    },
    {
        "id": 3,
        "title": "HTML desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/26557907-0555-427e-a40c-6ff207f98d72.png",
        "price": 20,
        "professor": "Beto Quiroga"
    },
    {
        "id": 4,
        "title": "Drupal desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/big/43973b1c-a8e2-4863-9252-2ae41377cab2.png",
        "price": 20,
        "professor": "Beto Quiroga"
    }
];

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        {
            courses.map(course => (
                <CourseCard 
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    price={course.price} 
                    image={course.image}
                    professor={course.professor}
                />
            ))
        }
    </div>
);

export default CourseGrid;