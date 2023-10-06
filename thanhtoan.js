import { NavLink } from "react-router-dom";
function ThanhToan(){
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
               
                
    
            </tr>


                </thead>
              <tbody>
                <tr>
                    <td>Tên sản phẩm</td>
                    <td>10.000</td>
                    <td> 2</td>
                    <td> 20.000</td>
                   
                </tr>
              </tbody>
              {/* Nhập thông tin  */}
              <h3> THÔNG TIN NGƯỜI NHẬN HÀNG </h3>
              
              <label for="">Họ tên      </label>
       <input type="text" id="ho-ten" value=""/><br/>
       <label for="">Điện thoại      </label> 
       <input type="text" id="dien-thoai" value=""/><br/>
       <label for="">Địa chỉ     </label>
       <input type="text" id="dia-chi" value=""/><br/>
            
              <ul className="nav nav-pills">
              <tfoot>
            
             <li className="nav-item">

<NavLink to="/" className="btn btn-warning">Thanh toán</NavLink>

   </li>
              </tfoot>
              </ul>

            </table>
        </div>
        </>
    );
}
export default ThanhToan;