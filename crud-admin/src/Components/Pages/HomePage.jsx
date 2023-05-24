import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function HomePage() {
  const [view, setView] = useState({})
  const [show, setShow] = useState(false);
  //hàm bật tật modal view
  const handleClose = () => setShow(false);

  const handleShow = (i) => {
    setShow(true);
    axios.get(`http://localhost:7777/users/${i}`)
      .then(res => setView(res.data))
  }

  // ----------------------------------------------------------------------------------------------
  const [data, setData] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const handleChangeInput = (e) => {
    setSearchInput(e.target.value)
  }
  //hàm loadUser dùng để lấy dữ liệu từ API
  const loadUser = async () => {
    let url = `http://localhost:7777/users`
    if (searchInput) {
      url += `?q=${searchInput}`
    }
    //Logic SORT
    if (sortType === 'asc') {
      url += `?_sort=username&_order=asc`
    } else {
      url += `?_sort=username&_order=desc`

    }
    const result = await axios.get(url)
    setData(result.data)
  }

  // ===============================================================================

  // sort
  const [sortType, setSortType] = useState('asc')

  useEffect(() => {
    loadUser()
  }, [searchInput, sortType])

  const handleDelete = async (i) => {
    await axios.delete(`http://localhost:7777/users/${i}`)
    loadUser()
  }
  // ===============================================================================
  const [sort, setSort] = useState('')
  const handleSort = (e) => {
    setSort(e.target.value)
  }
  if (sort === '1') {
    axios.get(`http://localhost:7777/users/?_sort=username&_order=asc`)
      .then(res => setData(res.data))
  } else if (sort === '2') {
    axios.get(`http://localhost:7777/users/?_sort=username&_order=desc`)
      .then(res => setData(res.data))
  }
  //Hàm Sort AGE
  const handleSortAge = () => {
    sortType === 'asc' ? setSortType('desc') : setSortType('asc')
  }
  console.log(sortType);
  return (

    <div>
      {/* <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://vapa.vn/wp-content/uploads/2022/12/hinh-nen-may-tinh-4k-thien-nhien-001.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://noitoiseden.com/wp-content/uploads/2018/09/anh-thien-nhien-full-hd-2k-4k.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.pinimg.com/originals/ce/12/25/ce1225f92e766b3a87113dc69560e88f.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      <div style={{ display: "flex", justifyContent: 'space-evenly' }}>
        <div className="d-flex search" role="search">
          <input

            className="div-control me-2"
            type="search"
            value={searchInput}
            placeholder="Search"
            aria-label="Search"
            onChange={handleChangeInput}
          />

          <button
            onClick={loadUser}
            type="button"
            className="btn btn-outline-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Search
          </button>



        </div>
        <Form.Select aria-label="Default select example" style={{ width: '200px' }} onClick={handleSort}>
          <option>SORT</option>
          <option value="1">Ascending</option>
          <option value="2">decrease</option>

        </Form.Select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th onClick={handleSortAge} scope="col">Age <i className="fa-solid fa-sort"></i></th>
            <th scope="col">Phone</th>
            <th scope="col" colSpan={3}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => (
            <tr key={i}>
              <th scope="row">{e.id}</th>
              <td>{e.username}</td>
              <td>{e.email}</td>
              <td>{e.age}</td>
              <td>{e.phone}</td>
              <td>
                {/* <!-- Button trigger modal --> */}
                <Button variant="primary" onClick={() => handleShow(e.id)}>
                  <i className="fa-solid fa-eye"></i>
                </Button>

                {/* <!-- Modal --> */}
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <table>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Username</th>
                          <th>Email</th>
                          <th>Age</th>
                          <th>Phone</th>
                        </tr>
                      </thead>
                      <tbody>
                        <td>{view.id}</td>
                        <td>{view.username}</td>
                        <td>{view.email}</td>
                        <td>{view.age}</td>
                        <td>{view.phone}</td>
                      </tbody>
                    </table>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>

                <Link to={`user/edit/${e.id}`}>
                  <button type="button" className="btn btn-warning"><i className="fa-solid fa-user-pen"></i></button>
                </Link>
                <button onClick={() => handleDelete(e.id)} type="button" className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default HomePage