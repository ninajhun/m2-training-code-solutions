import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    alert(text);
  }

  return (
    <>
      <CustomButton
        color="pink"
        text="hello"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        color="lightblue"
        text="hi"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        color="lightgreen"
        text="bye"
        onCustomClick={handleCustomClick}
      />
    </>
  );
}

export default App;
