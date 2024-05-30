import React from 'react';
import withAuth from '../components/withAuth';
import Internet from '../components/InternetStatus/Internet';
import Link from 'next/link';
import Nav from '../components/Nav';


function Page() {
  return (
    <>
    <Nav/>
<Internet/>
</>
  );
}

export default  (Page);
