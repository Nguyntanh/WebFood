import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8081/api/auth';

function Login({ switchToSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      alert(response.data); // Hiển thị thông báo đăng nhập thành công
    } catch (err) {
      setError('Đăng nhập thất bại. Vui lòng kiểm tra email hoặc mật khẩu.');
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ background: 'linear-gradient(to right, #0d6efd, #6610f2)' }}>
      <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Đăng Nhập</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mật Khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Đăng Nhập
          </button>
        </form>
        <p className="text-center mt-3">
          Chưa có tài khoản?{' '}
          <span
            className="text-primary cursor-pointer text-decoration-underline"
            onClick={switchToSignup}
            style={{ cursor: 'pointer' }}
          >
            Đăng Ký
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;