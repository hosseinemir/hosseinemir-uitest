import '../parallex.css'
import Parallaxbox from "./../parallexbox/Parallaxbox";
import MuseumIcon from '@mui/icons-material/Museum';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
export default function Parallaxsection(){
    
    const parallaxboxvar = [
        {id:1,chidrenicon:<MuseumIcon fontSize="large"/>,textforp:"متن نماشی"},
        {id:2,chidrenicon:<BarChartIcon  fontSize="large"/>,textforp:"نمودار کیفی"},
        {id:3,chidrenicon:<ShoppingBagIcon fontSize="large"/>,textforp:"نمونه کار ها"},
        {id:4,chidrenicon:<FormatPaintIcon fontSize="large"/>,textforp:"عملکرد  پایانی"},
        {id:5,chidrenicon:<ImportContactsIcon fontSize="large"/>,textforp:"اطلاعات ذخیره ای "},
        
    ]
        
    
    
    
    return(
        <div className="parralax-maindiv">
           
            <h1 >تامین مواد اولیه مرغوب توسط</h1>
            <h3>  تامینو</h3>
            <p> با ما بهترین باشید</p>
            <div className="parallax-box-container">
               
                {parallaxboxvar.map(item=>(
                    <Parallaxbox key={item.id} text={item.textforp}>
                        {item.chidrenicon}
                    </Parallaxbox>
                ))}

            </div>
        </div>
    );
}