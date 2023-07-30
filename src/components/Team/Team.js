import React from 'react'
import './Team.css'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Team() {
  
  const teamMember=[
    {id:1,img:'./img/Team/team-1.jpg',name:'والتر وایت',job:'مدیر ارشد اجرایی'},
    {id:2,img:'./img/Team/team-2.jpg',name:'سارا جونسون',job:'مدیر تولید'},
    {id:3,img:'./img/Team/team-3.jpg',name:'ویلیام اندرسون',job:'CTO'},
    {id:4,img:'./img/Team/team-4.jpg',name:'آماندا جپسون',job:'حسابدار'},
  ]
  
    return (
    <div className='Team-main'>
        <div className="Team-con">
            <div className="Team-title">
                <h2>تیم</h2>
                <span></span>
            </div>
            <h3>تیم ما را برسی کنید</h3>
            <div className="Team-box-con">
                {teamMember.map(item=>(
                    <div className="Team-box" key={item.id}>
                        <img src={item.img} alt="" />
                        <h4>{item.name}</h4>
                        <p>{item.job}</p>
                        <div className="Team-box-icons">
                          <div>
                            <TelegramIcon/>
                          </div>
                          <div>
                            <InstagramIcon/>
                          </div>
                          <div>
                            <LinkedInIcon/>
                          </div>
                          <div>
                            <TwitterIcon/>
                          </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
