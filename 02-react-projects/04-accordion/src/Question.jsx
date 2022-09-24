import { useState } from 'react';
import PropTypes from 'prop-types';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={() => setShowInfo(!showInfo)} className="btn">
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

Question.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};
