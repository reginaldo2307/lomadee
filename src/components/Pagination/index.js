import React, { useLayoutEffect } from "react";
import './index.css';
import { usePagination, DOTS } from "../../hooks/usePagination";

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    }

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    }

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul>
            <li
                className={('pagination', {disabled: currentPage === 1})}
                onClick={onPrevious}
            >
                <div></div>
            </li>
            {paginationRange.map(pageNumber => {
                if(pageNumber === DOTS) {
                    return <li>&#8230;</li>;
                }
                return (
                    <li
                        className={('pagination', {selected: pageNumber === currentPage})}
                        onClick={() => onPageChange(pageNumber)}
                    >
                       {pageNumber}
                    </li>
                )
            })}
            
            <li
                className={('pagination', {disabled: currentPage === lastPage})}
                onClick={onNext}
            >
                <div></div>
            </li>
        </ul>
    )
}

export default Pagination;