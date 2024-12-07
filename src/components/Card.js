import React from 'react';
import {FcLike} from "react-icons/fc";
import {toast} from "react-toastify";

const Card = (props) => {
  let course=props.course;
  let likedCourses=props.likedCourses;
  let setLikedCourses=props.setLikedCourses;
  function clickHandler(){
    if(likedCourses.include(course.id)){
      // eslint-disable-next-line no-undef
      setLikedCourses((prev)=>{prev.filter((cid!==course.id))});
      toast.warning("liked removed");
    }
    else{
      if(likedCourses.length===0){
        setLikedCourses([course.id]);
      }
      else{
        setLikedCourses((prev)=>[...prev,course.id]);
      }
      toast.success("liked the course successfully");
    }

  }
  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden ">
      <div className="relative">
        <img src={course.image.url}/>
        <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
        <button onClick={clickHandler}>
          <FcLike fontSize="1.75rem"/>

        </button>
      </div>
      </div>
      
      <div>
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className="mt-2 text-white">{course.description}</p>
      </div>
      
    </div>
  )
}

export default Card
