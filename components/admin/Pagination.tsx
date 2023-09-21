import React from 'react'

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange
}) => {
    return (
        <div className='pagination flex justify-between items-center mt-10'>
            <span className='pagination-info'>
                Page {currentPage} of {totalPages}
            </span>

            <div className='flex items-center gap-3'>
                <button
                    className='pagination-button'
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}>
                    Prev
                </button>
                <button
                    className='pagination-button'
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default Pagination
