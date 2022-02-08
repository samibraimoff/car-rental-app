import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import { getAllCars } from '../redux/actions/carActions';

const Home = () => {
  const { cars, loading, error } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <Layout>
      <Row justify='center' gutter={16} className='mt-4'>
        {loading && <Spinner />}
        {error && <p>Something went wrong... Please try again later.</p>}
        {cars.map((car) => (
          <Fragment key={car._id}>
            <Col lg={5} sm={24} xs={24}>
              <div className='car p-2 mt-3 box-shadow1'>
                <img src={car.image} alt={car.name} className='car-image' />

                <div className='car-content d-flex align-items-center justify-content-between'>
                  <div>
                    <p>{car.name}</p>
                    <p>{car.rentPerHour} $ rent per hour</p>
                  </div>
                  <div>
                    <button className='btn-orange'>
                      <Link to={`/booking/${car._id}`}>Book now</Link>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Fragment>
        ))}
      </Row>
    </Layout>
  );
};

export default Home;
