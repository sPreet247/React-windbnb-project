import { UL, Wrapper } from './LocationDropdownElements';
import { MdPlace } from 'react-icons/md';

function LocationDropdown({ setLocation }) {
  const Location = [
    'Helsinki, Finland',
    'Turku, Finland',
    'Vaasa, Finland',
    'Oulu, Finland',
  ];
  return (
    <>
      <Wrapper>
        {Location.map((location, index) => (
          <div>
            <UL onHover>
              <li key={index} onClick={() => setLocation(location)}>
                {location}
              </li>
            </UL>
          </div>
        ))}
      </Wrapper>
    </>
  );
}

export default LocationDropdown;
