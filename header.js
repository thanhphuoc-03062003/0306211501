import { NavLink } from "react-router-dom";
function Header() {
    return(
<>
<div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"> <use link href="#bootstrap"></use></svg>
        <span className="fs-4">        Quản Lý Bán Hàng</span>
      </a>

      <ul className="nav nav-pills">
  
       
        <li className="nav-item">
          <NavLink to="/Gio-hang" className="nav-link active">Giỏ Hàng</NavLink>
          
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link active">Thanh Toán</NavLink>
          
        </li>
      </ul>
    </header>
  </div>
  </>
    );
}
export default Header;