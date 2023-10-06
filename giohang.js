import { NavLink } from "react-router-dom";
function GioHang(){
    return(
        <>
        <div class="table-responsive">
            <table class="table table-striped table-sm">
                <thead>
            <tr>
                <th>SẢN PHẨM</th>
                <th>ĐƠN GIÁ</th>
                <th>SỐ LƯỢNG</th>
                <th>THÀNH TIỀN</th>
                <th></th>
                
    
            </tr>


                </thead>
              <tbody>
                <tr>
                    <td>Tên sản phẩm</td>
                    <td>10.000</td>
                    <td> 2</td>
                    <td> 20.000</td>
                    <td>
                    <a href="#">Xóa</a> | <a href="#">Cập nhật</a>
                    </td>
                </tr>
              </tbody>
              <div class="right">
              <ul className="nav nav-pills">
             
              <li className="nav-item">
   
          <NavLink to="/Gio-hang" className="btn btn-warning">Tiếp tục mua hàng</NavLink>
          
             </li>
             <li className="nav-item">

<NavLink to="/" className="btn btn-warning">Thanh toán</NavLink>


   </li>
       
              </ul>
              </div>

            </table>
        </div>
        </>
    );
}
export default GioHang;