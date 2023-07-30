import '../parallex.css'


export default function({children,text}){
    return(
        <div className="containerparallaxbox">
          
          <div className='icon-parralexbox'>
          {children}
            </div> 
           <p>{text}</p>
        </div>
    );
}