import React from 'react';

const ThemeItem = ({ theme }: { theme: Theme }): JSX.Element => {
  const questions = [];
  return (
    <>
    <div className="theme-container">{
      questions.map((question) => (
        //
      ))
    }</div>
    </>
    )
};

export default ThemeItem;
