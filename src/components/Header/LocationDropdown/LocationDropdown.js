import { UL, Wrapper } from './LocationDropdownElements';
import { MdPlace } from 'react-icons/md';
import { useState } from 'react';
function LocationDropdown() {
  const [location, setLocation] = useState();

  const Location = [
    'Helsinki, Finland',
    'Turku, Finland',
    'Vaasa, Finland',
    'Oulu, Finland',
  ];
  return (
    <>
      <Wrapper>
        {Location.map((item, index) => (
          <div>
            <UL onHover>
              <li key={index} onClick={() => setLocation(item)}>
                <MdPlace /> {item}
              </li>
            </UL>
          </div>
        ))}
      </Wrapper>
    </>
  );
}

export default LocationDropdown;
