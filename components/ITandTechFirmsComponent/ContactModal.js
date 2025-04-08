'use client';
import React, { useEffect } from 'react';
import GetInTouchForm from './GetInTouchForm';

const ContactModal = ({ show, onClose }) => {
  // Prevent background scrolling
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="modal fade show d-block mt-5"
      tabIndex="-1"
      style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{
          maxWidth: '800px',
          width: '90%',
          margin: '0 auto',
        }}
      >
        <div
          className="modal-content"
          style={{
            height: '80vh',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '8px',
          }}
        >
          <div className="modal-header">
            {/* <h5 className="modal-title fw-bold">Get In Touch</h5> */}
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          <div
            className="modal-body"
            style={{
              overflowY: 'auto',
              flex: 1,
            }}
          >
            <GetInTouchForm />
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 576px) {
          .modal-dialog {
            max-width: 95% !important;
          }

          .modal-content {
            height: 60vh !important;
          }

          .modal-header,
          .modal-body {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactModal;
