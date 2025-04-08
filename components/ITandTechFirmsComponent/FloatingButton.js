'use client';
import React from 'react';

const FloatingButton = ({ onClick }) => {
  return (
    <>
      <style>
        {
          `
        .btn-red {
            background-color: #FF0000; /* Your custom red */
            color: #fff;
            border: none;
          }

          .btn-red:hover {
            background-color: #d62828; /* Darker red on hover */
            color: #fff;
          }
       `
        }
      </style>
      <button
        type="button"
        className="btn btn-red position-fixed"
        style={{ bottom: '20px', right: '20px', zIndex: 9999 }}
        onClick={onClick}
      >
        Want to know more?
      </button>
    </>
  );
};

export default FloatingButton;
