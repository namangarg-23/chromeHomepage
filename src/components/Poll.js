import React, { useState } from 'react';
import pollsData from '../pollsData';
import Draggable from 'react-draggable';
import { FaPoll } from 'react-icons/fa';

const Poll = () => {
  const [polls, setPolls] = useState(pollsData);
  const [selectedOption, setSelectedOption] = useState({});
  const [votedPolls, setVotedPolls] = useState({});

  const handleOptionChange = (pollId, optionId) => {
    setSelectedOption({ ...selectedOption, [pollId]: optionId });
  };

  const handleVote = (pollId) => {
    if (!selectedOption[pollId]) return;

    const updatedPolls = polls.map((poll) => {
      if (poll.id === pollId) {
        const updatedOptions = poll.options.map((option) => {
          if (option.id === selectedOption[pollId]) {
            return { ...option, votes: option.votes + 1 };
          }
          return option;
        });
        return { ...poll, options: updatedOptions };
      }
      return poll;
    });

    setPolls(updatedPolls);
    setVotedPolls({ ...votedPolls, [pollId]: true });
  };

  return (
    <Draggable>
    <div className="widget">
      <div className="widget-icon">
        <FaPoll />
      </div>
      <div className="widget-content">
        <h2>Ongoing Polls</h2>
        {polls.map((poll) => (
          <div key={poll.id} className="poll">
            <h3>{poll.question}</h3>
            {poll.options.map((option) => (
              <div key={option.id} className="poll-option">
                <input
                  type="radio"
                  id={`poll-${poll.id}-option-${option.id}`}
                  name={`poll-${poll.id}`}
                  value={option.id}
                  checked={selectedOption[poll.id] === option.id}
                  onChange={() => handleOptionChange(poll.id, option.id)}
                />
                <label htmlFor={`poll-${poll.id}-option-${option.id}`}>
                  {option.text} ({option.votes} votes)
                </label>
              </div>
            ))}
            <button onClick={() => handleVote(poll.id)} disabled={votedPolls[poll.id]}>
              {votedPolls[poll.id] ? 'Voted' : 'Vote'}
            </button>
          </div>
        ))}
      </div>
    </div>
    </Draggable>
  );
};

export default Poll;
