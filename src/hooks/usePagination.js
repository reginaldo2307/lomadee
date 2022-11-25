import { useMemo } from "react"

const usePagination = ({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage
}) => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);
        const totalPageNumbers = siblingCount + 5;
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

        const showIdShowLeftDots = leftSiblingIndex > 2;
        const showIdShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        const range = (start, end) => {
            let lenght = end - start + 1;
            return Array.from({lenght}, (_, idx) => idx + start);
        }

        if (!showIdShowLeftDots && showIdShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, totalPageCount];

        }  

        if (showIdShowLeftDots && !showIdShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(totalPageCount - rightItemCount +1, totalPageCount);

            return [firstPageIndex, ...rightRange];

        } 

        if (showIdShowLeftDots && showIdShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, ...middleRange, lastPageIndex];
        }


    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
}

export default usePagination;

