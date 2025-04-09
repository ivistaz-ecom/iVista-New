'use client';
import React from 'react';

const FloatingButton = ({ onClick }) => {
  return (
    <>
      <style>
        {
          `
        .custom-btn-red {
            background-color: #FF0000; /* Your custom red */
            color: #fff;
            border: none;
            border-radius: 6px;
            font-size;
            padding: 10px 10px;
          }

          .custom-btn-red:hover {
            background-color: #d62828; /* Darker red on hover */
            color: #fff;
          }
       `
        }
      </style>
      <button
        type="button"
        className="btn custom-btn-red position-fixed"
        style={{ bottom: '20px', right: '20px', zIndex: 9999 }}
        onClick={onClick}
      >
        Tell Us Your Requirement
      </button>
    </>
  );
};

export default FloatingButton;
