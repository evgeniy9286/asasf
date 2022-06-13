const Blur = ({active, setActive}) => {
   return(
      <>
     <style jsx>{`
   .blur{
  width:100%;
  height:100%;
  right:40%;
  backdrop-filter: blur(2px);
  position: fixed;
  opacity:0;
  &.active{
  opacity:1;
}
}  
    `}</style>
      <div className={active? 'blur active' : 'blur'} onClick={() => setActive(false)}>
         </div>
      </>
   )
}

export default Blur