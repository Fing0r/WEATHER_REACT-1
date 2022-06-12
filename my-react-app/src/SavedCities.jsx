 import { CityContext } from "./context";
 
 function SavedCitiesItem(props) {
    const {onClick, name} = props
    return (
      <CityContext.Consumer>
        {value => (
          <li 
          className={name === value ? 'selected' : null} 
          onClick={onClick}>{name}</li>
        )}
      </CityContext.Consumer>
    )
  }
  
export  function SavedCities(props) {
    const {list, onItemClick} = props;
    const currentList = list.map(item => 
      <SavedCitiesItem  
      onClick={onItemClick} 
      name={item.name} 
      key={item.key}/>
    )
  
    return (
      <div>
          <div>Added Locations:</div>
          <ul>
            {currentList}
          </ul>
        </div>
    )
  }