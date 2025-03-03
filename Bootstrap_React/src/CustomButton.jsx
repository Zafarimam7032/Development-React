function ButtonDemonstration() {
  return (
    <div>
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <button type="button" class="btn btn-secondary">
        Secondary
      </button>
      <button type="button" class="btn btn-success">
        Success
      </button>
      <button type="button" class="btn btn-danger">
        Danger
      </button>
      <button type="button" class="btn btn-warning">
        Warning
      </button>
      <button type="button" class="btn btn-info">
        Info
      </button>
      <button type="button" class="btn btn-light">
        Light
      </button>
      <button type="button" class="btn btn-dark">
        Dark
      </button>

      <button type="button" class="btn btn-link">
        Link
      </button>
      <style>
        {`
          .btn {
            padding: 10px 20px;
            font-size: 16px;
            margin: 5px;
            border-radius: 5px;
            cursor: pointer;
          }
          
        `}
      </style>
    </div>
  );
}

export default ButtonDemonstration;
