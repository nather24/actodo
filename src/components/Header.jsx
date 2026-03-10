const Header=(props)=>
{
   return(<>
        <h1 className="text-3xl font-medium">Hello {props.user}!</h1>
        <p>I help you manage your activites:)</p>
   </>)
}
export default Header