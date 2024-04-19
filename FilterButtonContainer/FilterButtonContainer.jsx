import './FilterButtonContainer.css'
import FilterButtonByOrder from './FilterButtonByOrder/FilterButtonByOrder';

function FilterButtonContainer () {
    return (
        <div className="filter-button-container">
            <FilterButtonByOrder />
            <FilterButtonByOrder />
            <FilterButtonByOrder />
            <FilterButtonByOrder />
        </div>
    )
}

export default FilterButtonContainer;
