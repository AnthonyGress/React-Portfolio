function Row(props) {
  return (
    <div className={`row justify-content-center ${props.class}`}>
      {props.children}
    </div>
  );
}

export default Row;
