import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { fetchData, DataType } from './services/api/apiService';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import { AuthContext } from './services/context/AuthContext';

function App() {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if(loading) console.log("Loading...");
  if(error) console.log(error);

  console.log(data);

  const user = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/shoppingcart" element={!user ? <Navigate to="/login" replace /> : <ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;