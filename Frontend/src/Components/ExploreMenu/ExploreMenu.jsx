
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='ExploreMenu' id='ExploreMenu'>
        <h1>Explore our menu</h1>
        <p className='ExploreMenu-text'>
        Embark on a culinary voyage of discovery with our diverse menu. Explore a world of flavors, from bold global spices to comforting classics, and find the perfect dish to tantalize your taste buds.
        </p>
        <div className="ExploreMenu-list">
            {menu_list.map((item,index)=> {
                return(
                <div onClick={()=> setCategory(prev=>prev===item.menu_name? "All":item.menu_name)} key={index} className='ExploreMenu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
