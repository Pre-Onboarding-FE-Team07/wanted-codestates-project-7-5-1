import { memo } from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ text, onClickEvent }) => {
  return (
    <div className="fixed inset-0 z-50 h-screen w-screen bg-black/50">
      <div className="flex h-full w-full items-center justify-center">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold">{text}</h1>
            <br />
            <button
              className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
              onClick={onClickEvent}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
  onClickEvent: PropTypes.func.isRequired,
};

export default memo(ErrorMessage);
