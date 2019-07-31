import React, { Fragment } from 'react';

import { StatusBar } from 'react-native';

import Map from '~/components/Map';
import Modal from '~/components/Modal';

const Welcome = () => (
  <Fragment>
    <StatusBar barStyle="light-content" />
    <Map />
    <Modal />
  </Fragment>
);

export default Welcome;
