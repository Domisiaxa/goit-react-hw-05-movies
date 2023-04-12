import { SyncLoader } from 'react-spinners';

const spinnerStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const Spinner = () => {
  return (
    <div style={spinnerStyle}>
      <SyncLoader color="#36d7b7" />
    </div>
  );
};
