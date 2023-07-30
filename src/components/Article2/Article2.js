import React from 'react'
import './Article2.css'
import DescriptionIcon from '@mui/icons-material/Description';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import CollectionsIcon from '@mui/icons-material/Collections';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import Article2box from './Article2box';
export default function Article2() {
  
  const props=[
    {id:1,icon:<DescriptionIcon sx={{ fontSize: 50 }}/>,title:'تبلیغ سختی است',text:'این اولین پروژه ساخته شده توسط من است'},
    {id:2,icon:<ViewInArIcon sx={{ fontSize: 50 }}/>,title:'کدام یک از این هاست',text:'برای نوشتن این پروژه تقریبا زمان زیادی صرف شده است'},
    {id:3,icon:<CollectionsIcon sx={{ fontSize: 50 }}/>,title:'یک متن امتحانی',text:'گرچه در این پروژه از برخی کتابخانه های ریکت نیز استفاده شده است'},
    {id:4,icon:<LocalPoliceIcon sx={{ fontSize: 50 }}/>,title:'حقیقا مبارک',text:'پروژه فغلی ریفکتور شده ی پروژه ی اول است و میتواند توان طراحی من را نشان دهد'},
  ]
  
  
  
    return (
    <div className='article2-main'>
        <div className='article2-con'>
            <img src="./img/articlepart/14.png" alt="" />
            <div className='Article2-box-con'>
{props.map(item=>(
    <Article2box className='icon-art2' key={item.id} text={item.text} title={item.title}>
        {item.icon}
    </Article2box>
))}
            </div>
        </div>
    </div>
  )
}
