import React, { useState } from 'react'
import Draggable from 'react-draggable';
import { MdCancel } from 'react-icons/md'
const Home = () => {
    const [searchValue, setSearchValue] = useState('')
    const [items, setItems] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = {
            searchValue

        }
        setItems([...items, newEntry]);
        setSearchValue('');

    }
    return (
        <>
            <section className='home'>
                <div className="row container">
                    <h4 style={{ color: '#fff' }}>Life</h4>
                    <div className="col-lg-3 col-md-12">
                        <div className='box'>
                            <h5>Todo</h5>
                            {
                                items.map((curElem, id) => {
                                    const { searchValue } = curElem;
                                    return (
                                        <Draggable defaultPosition={{ x: 0, y: 0 }}>
                                            <div key={id} className='hiddenDiv'>
                                                <h6 className='hidden'>
                                                    {searchValue}
                                                </h6>
                                            </div>
                                        </Draggable>

                                    )
                                })
                            }
                            <button className='addCard'>Add a card..</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <div className='box3'>
                            <h5>Doing</h5>
                            <button className='addCard'>Add a card</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <div className='box3'>
                            <h5>Done</h5>
                            <button className='addCard'>Add a card</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <div className='box4'>
                            <h5>Wish I could do</h5>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <div className="d-flex align-items-center justify-content-around my-3">
                                <button className='add'>Add</button>
                                <MdCancel />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <form action="#" onSubmit={handleSubmit} className='my-4'>
                            <input type="text" name='searchValue' className="form-control inputTag" id="exampleFormControlInput1" value={searchValue} placeholder='Add a list...' onChange={(e) => setSearchValue(e.target.value)} />
                            <button className='btn' type='submit'>Add a card</button>
                        </form>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Home