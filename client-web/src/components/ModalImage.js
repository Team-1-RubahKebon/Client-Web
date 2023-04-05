function ModalImage({ img }) {
  return (
    <div className="modal">
      <div className="modal-box relative">
        <label
          htmlFor="my-modal-3"
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
        <img src={img} alt="Student answer" />
      </div>
    </div>
  );
}

export default ModalImage;
