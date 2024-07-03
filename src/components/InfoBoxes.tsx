import InfoBox from './InfoBox';

const InfoBoxes = () => {
  return (
    <section>
      <div className='container-xl lg:container m-auto '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-4 rounded-lg'>
          <InfoBox
            heading='Looking for Property...'
            backgroundColor='bg-secondary-100'
            textColor='black'
            buttonInfo={{
              text: 'Browse Properties',
              link: '/properties',
              backgroundColor: 'bg-primary-900',
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>
          <InfoBox
            heading='Looking For Tenant...'
            backgroundColor='bg-primary-100'
            buttonInfo={{
              text: 'Add Property',
              link: '/properties/add',
              backgroundColor: 'bg-primary-900',
            }}
          >
            List your properties and reach potential tenants. Rent as an Airbnb
            or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};
export default InfoBoxes;
