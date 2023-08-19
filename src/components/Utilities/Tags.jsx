const Tags = ({ tags }) => {
  return (
    <div className="tags mt-1 d-flex justify-content-start align-items-center gap-3">
      {tags.map((tag, index) => (
        <span key={index} className="btn btn-tag fw-bold">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
