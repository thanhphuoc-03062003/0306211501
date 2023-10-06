import logo from './logo.svg';
import './App.css';
import Thethanhvien from './components/the_thanh_vien';
import './dist/css/bootstrap.min.css';
// import Header from './components2/header';
import Header from './componentsWeb/header';
import { Route,Routes } from 'react-router-dom';
import Trangchu from './dist/page/trangchu';
import SanPham from './dist/page/sanpham';
import DaiLy from './dist/page/daily';
import GioiThieu from './dist/page/gioithieu';
import LienHe from './dist/page/lienhe';
import Tintuc from './dist/page/tintuc';
import LoaiSanPham from './components3/loaisanpham';
import ThanhToan from './componentsWeb/thanhtoan';
import GioHang from './componentsWeb/giohang';
import TrangChu from './componentsWeb/trangchu';

// import SanPham from './components3/sanpham';
// const member ={
//     avatar :"download.png",
//     hoten :"HUYNH THANH PHUOC ",
//     thanhvien : "VIP",
//     ngaythamgia : " 04/02/2003",
//   }

const dsLoaiSanPham = [
    {
        'ten' : 'Loai san pham 1',
        'ds_san_pham':[
            {
               'hinh_anh' :'',
               'ten' : 'sach 4',
               'gia' :50000
            },
            {
                'hinh_anh' :'',
                'ten' : 'sach 5',
                'gia' :10000000
             }
        ]
    },
    {
        'ten' : 'Loai san pham 2',
        'ds_san_pham':[
            {
               'hinh_anh' :'',
               'ten' : 'sach 6',
               'gia' :50000
            },
            {
                'hinh_anh' :'',
                'ten' : 'sach 7',
                'gia' :10000000
             }
        ]
    }

]

const  listLoaiSanPhams = dsLoaiSanPham.map(function(item){
return (
    <LoaiSanPham data={item}/>
);
});

function App() {
 return (
// {/* <Thethanhvien member={member.hoten}/> */}

<div className="app">
     <Header/>
    
    <Routes>
    {/* <Route path="/" element={<Trangchu/>}></Route>
    <Route path="/San-pham" element={<SanPham/>}></Route>
    <Route path="/dai-ly" element={<DaiLy/>}></Route>
    <Route path="/gioi-thieu" element={<GioiThieu/>}></Route>
    <Route path="/lien-he" element={<LienHe/>}></Route>
    <Route path="/tin-tuc" element={<Tintuc/>}></Route> */}


    <Route path="/" element={<ThanhToan/>}></Route>
    
    <Route path="/Gio-hang" element={<GioHang/>}></Route>
    {/* <Route path="/Trang-chu" element={<TrangChu/>}></Route> */}

    </Routes> 
    {/* <>{listLoaiSanPhams}</> */}
   
</div>

 );
}

export default App;
