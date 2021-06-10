import './style.css';
import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul>
                {pageNumbers.map(pageNumber => (
                    <li key={pageNumber}><b onClick={() => paginate(pageNumber)}>{pageNumber}</b></li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;