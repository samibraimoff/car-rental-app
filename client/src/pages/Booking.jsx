import { Col, Row, Divider } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import { getCar } from '../redux/actions/carActions';

const Booking = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { car, loading, error } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(getCar(id));
  }, [dispatch, id]);

  return (
    <Layout>
      {loading && <Spinner />}
      {error && <p>Something went wrong...</p>}
      <Row
        justify='center'
        className='d-flex align-items-center'
        style={{ minHeight: '80vh' }}
      >
        <Col lg={10} sm={24} xs={24}>
          <img src={car.image} alt='' className='car_image_2 box-shadow1' />
        </Col>

        <Col lg={10} sm={24} xs={24}>
          <Divider type='horizontal' dashed>
            Car info
          </Divider>
          <div>
            <p>Car: {car.name}</p>
            <p>Rent: {car.rentPerHour} per hour</p>
            <p>Fuel type: {car.fuelType}</p>
            <p>Max persons: {car.capacity}</p>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default Booking;
