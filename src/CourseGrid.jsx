import React from 'react';
import Curso from "./Curso"

const cursos = [
    {
        "id" : 1,
        "title": "Python desde cero 2020",
        "image": "https://edteam-media.s3.amazonaws.com/courses/medium/85d3d7e4-19db-4cff-a4cb-cbead813b6b5.png",
        "price": "20 usd",
        "profesor": "Alvaro felipe"
    },
    {
        "id" : 2,
        "title": "Arduino desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/medium/1bada4e8-4bab-4be8-8f2e-83e285515187.png",
        "price": "20 usd",
        "profesor": "Alvaro felipe"
    },
    {
        "id" : 3,
        "title": "Unity desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/medium/35d81cae-b9b2-4fbd-9329-8bd20e09ef9f.png",
        "price": "20 usd",
        "profesor": "Alvaro felipe"
    },
    {
        "id" : 4,
        "title": "SingalR con .NET y React",
        "image": "https://edteam-media.s3.amazonaws.com/courses/medium/5afd9bc4-46f7-4326-9e9f-fe1a024be305.png",
        "price": "20 usd",
        "profesor": "Alvaro felipe"
    },
    {
        "id" : 5,
        "title": "Amazón desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/medium/608331fa-c0c6-4f7c-9ad7-470903923179.jpg",
        "price": "20 usd",
        "profesor": "Alvaro felipe"
    },
    {
        "id" : 6,
        "title": "Linux desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/medium/5ffc4c77-cbc3-476d-9c18-e180882a52c9.jpg",
        "price": "20 usd",
        "profesor": "Alvaro felipe"
    }
    ]

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        { cursos.map(a => (
        <Curso 
        key={a.id} 
        id={a.id} 
        title={a.title} 
        image={a.image} 
        price={a.price} 
        profesor={a.profesor} 
        /> 
        ) ) }
    </div>
)


export default CourseGrid;