import React from 'react';
import Card from "./components";

const Cards = ({courses}) => {
    let allCourses=[];
    const getCourses=()=>{
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{allCourses.push(course);})
        })
        return allCourses;
        
    }
  return (
    <div>{
        // eslint-disable-next-line react/jsx-no-undef
        getCourses().map((course)=>{return <Card key={course.id} course={course}/>})}
      
    </div>
  )
}

export default Cards
