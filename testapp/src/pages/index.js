import React from 'react';

const Home = () => {
// return (
 const [data, setData] = React.useState(null);

 React.useEffect(() => {
 fetch("/api")
     .then((res) => res.json())
     .then((data) => setData(data.message));
 }, []);
  return (
    <div >
       <header >
         <img src="./images/logo.svg" alt="logo" />
         <p>{!data ? "Loading..." : data}</p>
       </header>
     </div>
);
};

export default Home;
