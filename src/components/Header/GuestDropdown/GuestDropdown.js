import { UL, Wrapper } from './GuestDropdownElements';
import {} from 'react-icons/md';
function GuestDropdown() {
  const Guest = [
    'Helsinki, Finland',
    'Turku, Finland',
    'Vaasa, Finland',
    'Oulu, Finland',
  ];
  return (
    <>
      <Wrapper>
        {Guest.map((item, index) => (
          <div key={index}>
            <UL>
              <li>{item}</li>
            </UL>
          </div>
        ))}
      </Wrapper>
    </>
  );
}

export default GuestDropdown;
