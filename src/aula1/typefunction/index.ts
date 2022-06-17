type MyFunctionStrings = (item: string) => string;

function MyStringsText(
  array: string[],
  callBackFn: MyFunctionStrings,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callBackFn(item));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = MyStringsText(abc, (item) => item.toLocaleUpperCase());

console.log(abcMapped);
