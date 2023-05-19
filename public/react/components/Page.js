import React from 'react';

export const Page = (props) => {
  const handleBackToListClick = () => {
    props.setCurrentPage(null)
  }


  return (
    <>
      <h3>{props.currentPage.title}</h3>
      <p>{props.currentPage.content}</p>
      <ul>
        {props.currentPage.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <p>{props.page.createdAt}</p>
      <button onClick={handleBackToListClick}>{props.page.title}</button>
    </>
  );
} 
	



export default Page