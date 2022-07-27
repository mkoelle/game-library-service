import { useContext, useState } from 'react';
import { AccountContext } from '../AccountContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    authenticate(username, password)
    .then((data: any) => {
      window.location.reload();
    })
    .catch((err: any) => {
      alert(`login failure ${err?.message ?? err}`);
    });
  };

  return (
    <>
      <div className='box content page'>
        <form onSubmit={onSubmit} className="">

        <h1 className="title has-text-centered is-size-2">Login</h1>
          <figure className="image container is-64x64">
            <img src="img/placeholder.png" alt='Lenders Library Logo' />
          </figure>
          <div className="field">
            <label className="label">User Name:</label>
            <p className="control has-icons-left has-icons-right">
            <input
                className="input" 
                type="email" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Email"
              />
            <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
            </span>
            </p>
          </div>
          <div className="field">
            <label className="label">Password:</label>
            <p className="control has-icons-left">
              <input
                  className="input" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <button type="submit" className="button is-info is-rounded is-outlined is-medium">Login</button>
        </form>
        </div>
    </>
  );
}

export default Login;