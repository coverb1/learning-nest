export default()=>({
     port:parseInt(process.env.PORT||'3000'),
     secret:process.env.SECRETE
})