import React from 'react'

function usePagination(data: any, itemsPerPage: number) {
  const [currentPage, setCurrentPage] = React.useState(1)
  const maxPage = Math.ceil(data.length / itemsPerPage)

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage
    const end = begin + itemsPerPage
    return data.slice(begin, end)
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
  }

  function jump(page: number) {
    const pageNumber = Math.max(1, page)
    setCurrentPage(() => Math.min(pageNumber, maxPage))
  }

  return { currentData, currentPage, jump, maxPage, next, prev }
}

export default usePagination
