'use client';
import React, { useEffect } from 'react';
import GetInTouchForm from './GetInTouchForm';

const ContactModal = ({ show, onClose }) => {
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
      className="modal fade show d-block"
      tabIndex="-1"
      onClick={onClose}
      style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1050,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       
      }}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '1100px',
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

      <style jsx>{`
        @media (max-width: 768px) {
          .modal-dialog {
            max-width: 95% !important;
          }

          .modal-content {
            height: 80vh !important;
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
