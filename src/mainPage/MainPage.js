import React, { useEffect, useState } from 'react';
import postServApi from '../API/postsServApi';
import FormInputs from '../components/FormInputs';
import SelectAndInput from '../components/SelectAndInput';
import TableList from '../components/TableList';
import MyButton from '../components/UI/MyButton';
import MyModal from '../components/UI/MyModal/MyModal';
import MyPagination from '../components/UI/MyModal/pagination/MyPagination';
import { useFetching } from '../Hooks/useFetching';
import { usePosts } from '../Hooks/useSortedPosts';
import '../style/main.css'
import { getPageCount } from '../Utils/page';
function MainPage() {
  const [posts, setPosts] = useState([])
  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState({
    sort: '', query: ''
  })
  // Server items start
  const [totalPage, setTotalPage] = useState(0)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const changePage = (page) => {
    setPage(page)
    fetching(limit, page)
  }
  console.log();
  // Server items End

  const [fetching, isLoading, error] = useFetching(async (limit, page) => {
    const response = await postServApi.getAllPosts(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPage(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetching(limit, page)
  }, [])

  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
  return (
    <div className='app'>
      <MyModal modal={modal} setModal={setModal}>
        <FormInputs setModal={setModal} theme='Add your first post' setPosts={setPosts} posts={posts} />
      </MyModal>
      <SelectAndInput filter={filter} setFilter={setFilter} />
      <MyButton className='btn btn-success w-100' onClick={() => setModal(!modal)}>Add New Post</MyButton>
      {error ? <MyModal modal={error}><p className='text-danger m-0 text-center'>{error}</p></MyModal> : null}
      {isLoading
        ? <div className="spinner-border text-warning d-flex m-auto mt-5" role="status">
          <span className="visually-hidden"></span>
        </div>
        : <>
          <TableList posts={sortedAndSearchPosts} setPosts={setPosts} />
          <MyPagination totalPage={totalPage} page={page} changePage={changePage}></MyPagination>
        </>
      }
    </div >
  );
}

export default MainPage;