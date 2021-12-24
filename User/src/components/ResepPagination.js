import React from 'react';
import '../assets/styles/components.css';

export default function ResepPagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="mb-6 flex justify-center">
            <p className="font-light text-sm mt-1 mr-1">Halaman</p>
            <ul className="pagination">
                {pageNumbers.map(number => (
                <li key={number} className="pagination-item">
                    <a onClick={() => paginate(number)} to="/resep-makanan" className="pagination-link">
                        {number}
                    </a>
                </li>
                ))}
            </ul>
        </nav>
    );
}
