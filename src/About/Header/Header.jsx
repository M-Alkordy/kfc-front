import "./Header.css"
const Header = (props) => {
  return (
    <h1 className='my-header'>{props.title}</h1>
  )
}

export default Header