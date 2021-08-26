function Row(props) {
  let customClass;
  props.class
    ? (customClass = `${props.class} row justify-content-center`)
    : (customClass = "row justify-content-center");
  return <div className={customClass}>{props.children}</div>;
}

export default Row;
