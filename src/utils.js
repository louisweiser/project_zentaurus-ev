export function stringArrayIntoJSX(arrayOfStrings) {
  const convertedText = arrayOfStrings.map((text, index) => {
    return <p key={index}>{text}</p>;
  });
  return convertedText;
}
