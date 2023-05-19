import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import Page from './Page';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [selectedPage, setSelectedPage] = useState(null)
	const [currentPage, setCurrentPage] = useState(null)
	

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			//getting the data from fetch and setting it to the pages variable
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function fetchPages(slug){
		try {
			const response = await fetch(`${apiURL}/wiki/${slug}`);
			const pageData = await response.json();
			setSelectedPage(pageData);
			console.log(pageData)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	async function handlePageClick (e) {
		console.log(e.target.value)
	}
	const handlePageClick = () = {
		setSelectedPage
	}

	return (
		<main>	
		  <h1>WikiVerse</h1>
		  {!currentPage ? (
			<>
			  <h2>An interesting 📚</h2>
			  <PagesList pages={pages} onPageClick={handlePageClick} />
			</>
		  ) : (
			<>
			  <button onClick={handleBackToListClick}>Back to Wiki List</button>
			  <Page setCurrentPage={setCurrentPage} currentPage={currentPage} />
			</>
		  )}
		</main>
	);

	/*return (
        <main>  
      <h1>WikiVerse</h1>
            <h2>An interesting 📚</h2>
            <PagesList pages={pages} />
        </main>
    )*/

}