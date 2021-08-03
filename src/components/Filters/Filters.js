import {
  FiltersContainer,
  FiltersItem,
  FiltersRemoveButton,
  FiltersClearButton,
} from './Filters.styles'

const Filters = ({ filters, handleRemove, handleClear }) => {
  return (
    <FiltersContainer>
      <div>
        {filters.map((detail, idx) => (
          <FiltersItem key={idx + 1000}>
            <span>{detail}</span>
            <FiltersRemoveButton onClick={() => handleRemove(detail)}>
              <img src="./images/icon-remove.svg" alt="remove icon" />
            </FiltersRemoveButton>
          </FiltersItem>
        ))}
      </div>
      <FiltersClearButton onClick={handleClear}>Clear</FiltersClearButton>
    </FiltersContainer>
  )
}

export default Filters
