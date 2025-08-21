import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8081/api/auth';

function Signup({ switchToLogin }) {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    role: 'customer',
  });
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/signup`, user);
      alert('Đăng ký thành công! Vui lòng đăng nhập.');
      switchToLogin();
    } catch (err) {
      setError('Đăng ký thất bại. Vui lòng kiểm tra thông tin.');
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ background: 'linear-gradient(to right, #FC8A06, #FC8A06)' }}>
      <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Đăng Ký</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label className="form-label">Họ Tên</label>
            <input
              type="text"
              name="fullName"
              value={user.fullName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mật Khẩu</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Số Điện Thoại</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Địa Chỉ</label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Đăng Ký
          </button>
        </form>
        <p className="text-center mt-3">
          Đã có tài khoản?{' '}
          <span
            className="text-primary cursor-pointer text-decoration-underline"
            onClick={switchToLogin}
            style={{ cursor: 'pointer' }}
          >
            Đăng Nhập
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;