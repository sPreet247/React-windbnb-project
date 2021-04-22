import { UL, Wrapper } from './LocationDropdownElements';
import { MdPlace } from 'react-icons/md';
function LocationDropdown() {
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
          <div key={index}>
            <UL onHover>
              <li>
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
