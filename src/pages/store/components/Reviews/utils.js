export const starElement = (stars) => {
    return [...Array(stars)].map((e, i) => <svg className='startReview' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .06c-.82 0-1.548.528-1.801 1.308L8.157 7.134a.412.412 0 0 1-.37.3l-5.906.249c-.832.074-1.506.619-1.743 1.382a1.974 1.974 0 0 0 .622 2.104l4.653 3.811c.143.12.204.323.148.51l-1.605 5.971a1.916 1.916 0 0 0 .683 2.076c.645.49 1.526.524 2.207.086l4.943-3.448a.356.356 0 0 1 .416-.004l4.968 3.438c.732.432 1.594.373 2.218-.12.582-.46.844-1.21.686-1.925l-1.633-6.079a.493.493 0 0 1 .153-.513l4.637-3.783a1.974 1.974 0 0 0-1.078-3.488l-5.949-.25a.4.4 0 0 1-.357-.28l-2.055-5.82A1.888 1.888 0 0 0 12 .06z"></path></svg>)
}
