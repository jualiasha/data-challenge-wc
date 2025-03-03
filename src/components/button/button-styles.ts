import { css } from 'lit';

export default css`
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    border-radius: 0.3125rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    padding: 0.5rem 1rem;
    border: 0.125rem solid transparent;
    height: 1rem;
  }

  /* Sizes */
  .small {
    font-size: 0.875rem;
    padding: 0.375rem 0.75rem;
  }

  .medium {
    font-size: 1rem;
    padding: 0.625rem 1.25rem;
  }

  /* Variants */
  .contained {
    color: white;
  }

  .outlined {
    background-color: transparent;
    border: 0.125rem solid;
  }

  /* Colors */
  .primary {
    background-color: #007bff;
    border-color: #007bff;
  }

  .primary:hover {
    background-color: #0056b3;
  }

  .secondary {
    background-color: #6c757d;
    border-color: #6c757d;
  }

  .secondary:hover {
    background-color: #545b62;
  }

  /* Outlined Color Variants */
  .outlined.primary {
    color: #007bff;
    background-color: transparent;
  }

  .outlined.primary:hover {
    background-color: rgba(0, 123, 255, 0.1);
  }

  .outlined.secondary {
    color: #6c757d;
    background-color: transparent;
  }

  .outlined.secondary:hover {
    background-color: rgba(108, 117, 125, 0.1);
  }

  /* Icon Support */
  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    height: 0.5rem;
  }

  /* Disabled State */
  .disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  .disabled:hover {
    background-color: inherit !important;
    border-color: inherit !important;
    color: inherit;
  }
`;
