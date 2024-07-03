'use client';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '250px auto',
};

const LoadingPage = ({ loading }:{loading:boolean}) => {
  return (
    <ClipLoader
      color='#D5A724'
      loading={loading}
      cssOverride={override}
      size={100}
      aria-label='Loading Spinner'
    />
  );
};
export default LoadingPage;
