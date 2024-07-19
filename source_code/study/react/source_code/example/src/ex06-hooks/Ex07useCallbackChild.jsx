function Ex07useCallbackChild({ onClick }) {
  console.log('Ex07useCallbackChild 렌더링');
  return <button onClick={onClick}>Increment</button>;
}

export default Ex07useCallbackChild;
